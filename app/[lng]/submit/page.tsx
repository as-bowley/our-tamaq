import { Nav } from "../../components/Nav";

export default function Submit({ params: { lng } }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path="/submit"></Nav>
      <section>
        <h1>Submit</h1>
      </section>
    </>
  );
}
