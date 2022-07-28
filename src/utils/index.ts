export const canUseDOM = () => {
  return (
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
};

export const swithLocale = (langKey: string) => {
  switch (langKey) {
    case "zh-CN":
      return "zh";
    case "nl":
      return "nl_NL";
    case "zh-Hant":
      return "zh_TW";
    default:
      return langKey;
  }
};

export interface IUtilsMap<T> {
  [key: string]: T;
}

export type ThemeMode = "Light" | "Dark";

export const getLoadingScreenColor = (themeMode: ThemeMode) => {
  return themeMode === "Dark" ? "#17171A" : "#fff";
};

export * from "./hardCode";
export * from "./socket";
export * from "./tv";
