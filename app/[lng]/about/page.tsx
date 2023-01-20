import { Nav } from "../../components/Nav";

export default function About({ params: { lng } }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path="/about"></Nav>
      <section>
        <h1>About</h1>
      </section>
    </>
  );
}
