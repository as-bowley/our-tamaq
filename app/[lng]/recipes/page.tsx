import { Nav } from "../../components/Nav";
import RecipeCard from "../../components/RecipeCard";

export async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Recipes({ params: { lng } }) {
  const { products } = await getData();
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path="/recipes"></Nav>
      <section className="mt-4">
        <div className="flex justify-center">
          <h1 className="text-3xl">Recipes</h1>
        </div>
        <div className="grid grid-cols-4 gap-3 px-12 mt-4">
          {products.map((product, index: Number) => {
            return index <= 10 ? (
              <RecipeCard
                name={product.title}
                image={product.images[0]}
                desc={product.description}
                link={""}
                key={product.id}
              ></RecipeCard>
            ) : (
              ""
            );
          })}
        </div>
      </section>
    </>
  );
}
