import { getAllProductsQuery } from "../utils/queries/get-all-products-query";
import fetchApi from "../utils/fetch-api";

export const getAllProducts = async (): Promise<any[]> => {
  const products = await fetchApi({ query: getAllProductsQuery });
  return products.data;
};
