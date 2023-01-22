import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { Trans } from "react-i18next/TransWithoutContext";
import { i18n } from "i18next";
import { languages, fallbackLng } from "../../i18n/settings";
import Dropdown from "../Dropdown";
import NavMobi from "./NavMobi";

export const NavBase = ({
  i18n,
  lng,
  path = "",
}: {
  i18n: i18n;
  lng: string;
  path: string;
}) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const t = i18n.getFixedT(lng, "navbar");

  return (
    <header>
      <nav className="flex py-5 justify-between items-center">
        <div className="flex items-center">
          <Link href={`/${lng}`} className="pr-10">
            <Image src={logo} alt="Our Tamaq Logo" width={200} priority />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex align-middle mt-3">
              <li className="px-5 transition-colors duration-200 origin-left ease-in	hover:text-[#F68C75] ">
                <Link href={`/${lng}/about`}>{t("m1")}</Link>
              </li>
              <li className="px-5 transition-colors duration-200 origin-left ease-in hover:text-[#F68C75]">
                <Link href={`/${lng}/recipes`}>{t("m2")}</Link>
              </li>
              <li className="px-5 transition-colors duration-200 origin-left ease-in hover:text-[#F68C75]">
                <Link href={`/${lng}/submit`}>{t("m3")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div>
            <button className="px-8 py-2 mr-3 border border-[#F68C75] rounded text-[#F68C75] hover:bg-[#fef5f3] active:outline-none focus:ring focus:ring-[#f9a796]">
              {t("login")}
            </button>
            <button className="px-8 py-2 bg-[#F68C75] rounded text-white hover:bg-[#f57d63] active:outline-none focus:ring focus:ring-[#fabdaf]">
              {t("signup")}
            </button>
          </div>
          <div className="flex items-center px-2 text-[#F68C75]">
            <Trans i18nKey="languageSwitcher" t={t}>
              <Dropdown
                languages={languages}
                path={path}
                currentLng={lng}
              ></Dropdown>
            </Trans>
          </div>
        </div>
        <NavMobi path={path} currentLng={lng}></NavMobi>
      </nav>
    </header>
  );
};
