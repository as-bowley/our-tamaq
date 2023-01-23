"use client";

import { useState } from "react";
import Image from "next/image";
import chevron from "../assets/images/chevron.png";
import Link from "next/link";

export default function Dropdown({
  languages,
  path = "",
  currentLng,
}: {
  languages: string[];
  path: string;
  currentLng: string;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center py-2 pr-4 ml-4"
      >
        <span className="pr-1">
          {currentLng == "ug" ? "ئۇيغۇر" : currentLng}
        </span>
        <Image src={chevron} alt="" width={20}></Image>
      </button>
      <div
        className={`${
          isDropdownOpen ? "" : "hidden"
        } absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow ml-2 py-2 px-2`}
        id="dropdown"
      >
        <ul className="flex flex-col items-center" aria-labelledby="dropdown">
          <li className="pb-2 border-b-2 border-b-slate-100">
            <strong>{currentLng == "ug" ? "ئۇيغۇر" : currentLng}</strong>
          </li>
          {languages
            .filter((l) => currentLng !== l)
            .map((l, index) => {
              return (
                <li key={l}>
                  {index > 0 && " or "}
                  <a href={`/${l}${path}`}>{l == "ug" ? "ئۇيغۇر" : l}</a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
