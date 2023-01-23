"use client";

import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { useState } from "react";
import { languages } from "../../i18n/settings";
import { useTranslation } from "../../i18n/client";

export default function NavMobi({
  path = "",
  currentLng,
}: {
  path: string;
  currentLng: string;
}) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const { t } = useTranslation(currentLng, "navbar");

  const toggleMenu = () => {
    setTimeout(() => setIsMenuShown(!isMenuShown), 0);
  };

  return (
    <>
      <button
        className={`${
          isMenuShown ? "hidden" : "flex"
        } items-center text-blue-600 p-3 ml-auto lg:hidden`}
        onClick={toggleMenu}
      >
        <svg
          className="block h-4 w-4 fill-[#F68C75]"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
      <div
        className={`${isMenuShown ? "" : "hidden"} navbar-menu relative z-50`}
      >
        <div
          className="fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        ></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="ml-auto" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#fde7e2] hover:text-[#F68C75] rounded"
                  href={`/${currentLng}`}
                >
                  {t("home")}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#fde7e2] hover:text-[#F68C75] rounded"
                  href={`/${currentLng}/about`}
                >
                  {t("m1")}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#fde7e2] hover:text-[#F68C75] rounded"
                  href={`/${currentLng}/recipes`}
                >
                  {t("m2")}
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-[#fde7e2] hover:text-[#F68C75] rounded"
                  href={`/${currentLng}/submit`}
                >
                  {t("m3")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="border border-gray-200 flex rounded-xl">
              <ul
                className="grid w-auto grow justify-evenly grid-cols-2 justify-items-center"
                aria-labelledby="dropdown"
              >
                <Trans i18nKey="languageSwitcher" t={t}>
                  <li className="flex justify-around underline min-w-full bg-[#fde7e2] text-gray-400 p-3 cursor-pointer rounded-l-xl">
                    <strong>
                      {currentLng == "ug" ? "ئۇيغۇر" : currentLng}
                    </strong>
                  </li>
                </Trans>
                {languages
                  .filter((lan) => lan !== currentLng)
                  .map((lan, index) => {
                    return (
                      <li
                        key={lan}
                        className="flex justify-around min-w-full p-3 cursor-pointer text-gray-400 hover:bg-[#ffae9c] rounded-r-xl"
                      >
                        {index > 0 && " or "}
                        <a href={`/${lan}${path}`}>
                          {lan == "ug" ? "ئۇيغۇر" : lan}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                {t("login")}
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-[#F68C75] hover:bg-[#f57d63]  rounded-xl"
                href="#"
              >
                {t("signup")}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
