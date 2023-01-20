"use client";

import { NavBase } from "./NavBase";
import { useTranslation } from "../../i18n/client";

export const Nav = ({ lng, path }) => {
  const { i18n } = useTranslation(lng, "navbar");
  return <NavBase i18n={i18n} lng={lng} path={path} />;
};
