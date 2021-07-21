import { getAllProductsQuery } from "../utils/queries/get-all-products-query";
import fetchApi from "../utils/fetch-api";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};

export const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });
  return data.products;
};
