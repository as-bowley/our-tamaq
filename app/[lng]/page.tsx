import Link from "next/link";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Nav } from "../components/Nav";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path={"/"}></Nav>
      <main>
        <div></div>
      </main>
    </>
  );
}
