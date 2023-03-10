import "../globals.css";

import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={"ltr"}>
      <head />
      <body className="mx-4 lg:mx-16">{children}</body>
    </html>
  );
}
