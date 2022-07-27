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
