import { Nav } from "../../components/Nav";

export default function Recipes({ params: { lng } }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path="/recipes"></Nav>
      <section>
        <h1>Recipes</h1>
      </section>
    </>
  );
}
