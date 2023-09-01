import { useState } from "react";
import { OrderType, OrderByType } from "../components/Nav";

const useSelectSort = () => {
  const [order, setOrder] = useState<OrderType>(
    (localStorage.getItem("order") as OrderType | null) || "name"
  );
  const [orderBy, setOrderBy] = useState<OrderByType>(
    (localStorage.getItem("orderBy") as OrderByType | null) || "asc"
  );
  return { order, setOrder, orderBy, setOrderBy };
};

export default useSelectSort;
