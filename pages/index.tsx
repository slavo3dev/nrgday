import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("Props: ", products);
  return (
    <div>
      <h1>NRG Day</h1>
      {JSON.stringify(products, null, 4)}
    </div>
  );
}
