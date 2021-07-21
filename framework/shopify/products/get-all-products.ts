import { getAllProductsQuery } from "../utils/queries/get-all-products-query";
import fetchApi from "../utils/fetch-api";
import { ProductConnection } from "../schema";
import { normalizeProduct } from "../utils/normalize";

type ReturnType = {
  products: ProductConnection;
};

export const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });

  // normalize products
  const products =
    data.products.edges.map(({ node: product }) =>
      normalizeProduct(product),
    ) ?? [];

  return products;
};
