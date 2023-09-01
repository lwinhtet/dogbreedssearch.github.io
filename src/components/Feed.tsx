import { BreedType } from "../features/dogs/dogsApiSlice";
import BreedPost from "./BreedPost";

type PropType = {
  total: number;
  data: BreedType[] | undefined;
  isFetching: boolean;
};

const Feed = ({ total, data, isFetching }: PropType) => {
  return (
    <>
      {data && (
        <main className="feed">
          <p className="numBreeds">
            Numbers of dog fetched: {data.length} of {total}
          </p>
          {data.map((breed) => (
            <BreedPost key={breed.id} breed={breed} />
          ))}
          {isFetching && <p className="loading">Loading...</p>}
          {data.length === 0 && !isFetching && (
            <p className="notFound">Oops! Breed Not Found!</p>
          )}
        </main>
      )}
      {!data && <p>No Dog Yet!</p>}
    </>
  );
};

export default Feed;
