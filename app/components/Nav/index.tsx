import { useTranslation } from "../../i18n";
import { NavBase } from "./NavBase";

export const Nav = async ({ lng, path }: { lng: string; path?: string }) => {
  const { t, i18n } = await useTranslation(lng, "navbar");
  return <NavBase i18n={i18n} lng={lng} path={path} />;
};
