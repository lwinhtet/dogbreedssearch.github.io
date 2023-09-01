import {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useFetchBreedsQuery, BreedType } from "../features/dogs/dogsApiSlice";
import useSelectSort from "./useSelectSort";
import { sortByHeight, sortByLifeSpan, sortByName } from "../utils/sort";

const useBreedsData = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const { order, setOrder, orderBy, setOrderBy } = useSelectSort();
  const currentPageRef = useRef(1);
  const [breeds, setBreeds] = useState<BreedType[]>([]);
  const { data, isFetching } = useFetchBreedsQuery(debouncedSearch);
  const chunkSize = 10;

  const sortedBreeds = useMemo(() => {
    if (data) {
      const clonedData = [...data];
      if (order === "height") {
        clonedData.sort(sortByHeight(orderBy));
      } else if (order === "lifespan") {
        clonedData.sort(sortByLifeSpan(orderBy));
      } else if (order === "name") {
        clonedData.sort(sortByName(orderBy));
      }
      return clonedData;
    }
    return undefined;
  }, [data, order, orderBy]);

  const loadBreedsDataChunks = useCallback(
    (refresh = false) => {
      if (refresh) {
        setBreeds([]);
        currentPageRef.current = 1;
      }

      if (sortedBreeds) {
        const startIndex = (currentPageRef.current - 1) * chunkSize;
        const endIndex = startIndex + chunkSize;
        const newChunk: BreedType[] = sortedBreeds.slice(startIndex, endIndex);
        setBreeds((prev) => [...prev, ...newChunk]);
        currentPageRef.current = currentPageRef.current + 1;
      }
    },
    [sortedBreeds]
  );

  useEffect(() => {
    loadBreedsDataChunks(true);
  }, [data, order, orderBy, loadBreedsDataChunks]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.body.scrollHeight;

      if (
        scrollPosition + windowHeight >= contentHeight - 100 &&
        sortedBreeds &&
        sortedBreeds.length > breeds.length
      ) {
        loadBreedsDataChunks();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sortedBreeds, loadBreedsDataChunks, breeds.length]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return {
    search,
    debouncedSearch,
    setDebouncedSearch,
    breeds,
    isFetching,
    sortedBreeds,
    handleInputChange,
    order,
    setOrder,
    orderBy,
    setOrderBy,
  };
};

export type UseBreedsDataType = ReturnType<typeof useBreedsData>;

export default useBreedsData;
