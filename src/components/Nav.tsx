import { ChangeEvent, FormEvent } from "react";

export type OrderType = "name" | "height" | "lifespan";
export type OrderByType = "asc" | "desc";

type PropType = {
  search: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
  orderBy: OrderByType;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderByType>>;
};

const Nav = ({
  search,
  handleInputChange,
  order,
  setOrder,
  orderBy,
  setOrderBy,
}: PropType) => {
  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as OrderType);
    localStorage.setItem("order", e.target.value);
  };

  const handleOrderByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value as OrderByType);
    localStorage.setItem("orderBy", e.target.value);
  };

  return (
    <nav className="Nav">
      <form
        className="searchForm"
        onSubmit={(e: FormEvent) => e.preventDefault()}
      >
        <label htmlFor="search">Search Breeds</label>
        <input
          type="text"
          id="search"
          placeholder="eg. Bulldog"
          value={search}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </form>
      <div className="breedSort">
        <select
          name="order"
          id="order"
          value={order}
          onChange={handleOrderChange}
          aria-label="Order"
        >
          <option value="name">Name</option>
          <option value="height">Height</option>
          <option value="lifespan">Life Span</option>
        </select>
        <select
          name="orderBy"
          id="orderBy"
          value={orderBy}
          onChange={handleOrderByChange}
          aria-label="Order By"
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;
