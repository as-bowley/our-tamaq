import Image from 'next/image';
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Nav } from "../components/Nav";

import recipeImg from "../assets/images/recipe-img3.jpeg";
import Link from "next/link";

export default async function Page({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "hero");

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Nav lng={lng} path={"/"}></Nav>
      <section className="h-[calc(100vh-100px)] grid grid-cols-2 px-12 mt-1">
        <div className="h-full flex flex-col justify-evenly p-4">
          <h1 className="text-7xl font-serif ">{t("heroTitle")}</h1>
          <div>
            <Link
              href={`/${lng}/recipes`}
              className="px-8 py-3 mr-3 border border-[#F68C75] rounded text-[#F68C75] hover:bg-[#fef5f3] active:outline-none focus:ring focus:ring-[#f9a796]"
            >
              {t("b1")}
            </Link>
            <Link
              href={`/${lng}/submit`}
              className="px-8 py-3 bg-[#F68C75] rounded text-white hover:bg-[#f57d63] active:outline-none focus:ring focus:ring-[#fabdaf]"
            >
              {t("b2")}
            </Link>
          </div>
          <blockquote className="text-xl italic font-semibold text-left text-gray-500">
            {t("quote")}
          </blockquote>
        </div>
        <div className="max-h-[calc(100vh-120px)] relative overflow-hidden flex flex-col justify-center p-4">
          <Image src={recipeImg} alt="" className="rounded "></Image>
        </div>
      </section>
    </>
  );
}
