import { BreedType } from "../features/dogs/dogsApiSlice";
import { OrderByType } from "../components/Nav";

export const sortByHeight = (orderBy: OrderByType) => {
  return (a: BreedType, b: BreedType) => {
    const heightA = parseInt(a.height.metric.split(" ")[0]);
    const heightB = parseInt(b.height.metric.split(" ")[0]);

    if (isNaN(heightA) || isNaN(heightB)) {
      throw new Error("invalid height format in sortByHeight");
    }

    if (orderBy === "asc") {
      return heightA - heightB;
    } else if (orderBy === "desc") {
      return heightB - heightA;
    } else {
      throw new Error("sorting error in sortByHeight");
    }
  };
};

export const sortByLifeSpan = (orderBy: OrderByType) => {
  return (a: BreedType, b: BreedType) => {
    const lifeSpanA = parseInt(a.life_span.split(" ")[0]);
    const lifeSpanB = parseInt(b.life_span.split(" ")[0]);

    if (isNaN(lifeSpanA) || isNaN(lifeSpanB)) {
      throw new Error("invalid lifespan format in sortByLifeSpan");
    }

    if (orderBy === "asc") {
      return lifeSpanA - lifeSpanB;
    } else if (orderBy === "desc") {
      return lifeSpanB - lifeSpanA;
    } else {
      throw new Error("sorting error in sortByLifeSpan");
    }
  };
};

export const sortByName = (orderBy: OrderByType) => {
  return (a: BreedType, b: BreedType) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (orderBy === "asc") {
      return nameA.localeCompare(nameB);
    } else if (orderBy === "desc") {
      return nameB.localeCompare(nameA);
    } else {
      throw new Error("sorting error in sortByName");
    }
  };
};
