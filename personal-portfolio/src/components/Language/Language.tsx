import { useTranslation } from "react-i18next";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

export const Language = () => {
  const { i18n } = useTranslation();

  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "pt" : "en");
  };

  return (
    <div className="rounded-full relative h-14 w-14 bg-white shadow-2xl border-amber-50 border-2">
      <button
        onClick={toggleLanguage}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      >
        {isEnglish ? (
          <LiaFlagUsaSolid className="text-black w-8 h-8" />
        ) : (
          <GiBrazilFlag className="text-black w-8 h-8" />
        )}
      </button>
    </div>
  );
};
