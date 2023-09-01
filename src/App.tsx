import "./styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Feed from "./components/Feed";
import useBreedsData, { UseBreedsDataType } from "./hooks/useBreedsData";

export default function App() {
  const {
    search,
    breeds,
    isFetching,
    sortedBreeds,
    handleInputChange,
    order,
    setOrder,
    orderBy,
    setOrderBy
  }: UseBreedsDataType = useBreedsData();

  return (
    <div className="App">
      <Header title="Search Dogs By Breed" />
      <Nav
        search={search}
        handleInputChange={handleInputChange}
        order={order}
        setOrder={setOrder}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <Feed
        total={sortedBreeds?.length || 0}
        data={breeds}
        isFetching={isFetching}
      />
    </div>
  );
}
