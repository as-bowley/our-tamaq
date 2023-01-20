import "../globals.css";

import { languages } from "../i18n/settings";
import { Nav } from "../components/Nav";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={"ltr"}>
      <head />
      <body className="mx-16">{children}</body>
    </html>
  );
}
