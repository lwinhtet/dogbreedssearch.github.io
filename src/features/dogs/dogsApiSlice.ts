import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const HOST = process.env.REACT_APP_DOG_API_HOST;
const API_KEY = process.env.REACT_APP_DOG_API_KEY;

export type BreedType = {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
};

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: HOST,
    prepareHeaders(headers) {
      headers.set("Content-Type", "keep-alive");
      headers.set("Accept-Encoding", "gzip, deflate, br");
      headers.set("x-api-key", API_KEY as string);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<BreedType[], string | void>({
        query(q) {
          return q ? `/v1/breeds/search?q=${q}` : "/v1/breeds";
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;

export default apiSlice;
