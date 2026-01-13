import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import basilidesLogo from "../../assets/basilides_logo.png";
import giordanoLogo from "../../assets/giordano_logo.png";
import wiseupLogo from "../../assets/wiseup_logo.png";
import unipLogo from "../../assets/unip_logo.png";
import albatoLogo from "../../assets/albato_logo.png";

import { JourneyCard } from "./JourneyCard";

interface JourneyItem {
  title: string;
  subtitle: string;
  description: string;
  year: string;
}

const journeyAssets = [
  { logo: basilidesLogo },
  { logo: giordanoLogo },
  { logo: wiseupLogo },
  { logo: unipLogo },
  { logo: albatoLogo },
];

export const Journey = () => {
  const { t } = useTranslation("journey");

  console.log(t);
  const rawItems = t("items", { returnObjects: true });

  const items: JourneyItem[] = Array.isArray(rawItems) ? rawItems : [];

  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    setIsLg(media.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsLg(e.matches);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <h1 className="lg:text-4xl text-2xl text-center">{t("sectionTitle")}</h1>

      <div className="w-full h-[150vh] flex lg:justify-center mt-8">
        <div className="w-10/12 flex justify-start lg:justify-center">
          <ul className="before:content-[''] before:h-[120rem] lg:before:h-full before:w-1 relative before:absolute before:bg-pink-500">
            {items.map((item, index) => {
              const topValue = `${(isLg ? 18 : 24) * index}rem`;

              return (
                <li
                  key={index}
                  className={`absolute px-2 lg:px-0 ${
                    index % 2 === 0
                      ? "lg:right-[0.875rem]"
                      : "lg:left-[0.875rem]"
                  }`}
                  style={{ top: topValue }}
                >
                  <motion.div
                    initial={{
                      x: index % 2 === 0 ? -200 : 200,
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <JourneyCard
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      year={item.year}
                      logo={journeyAssets[index]?.logo}
                      arrowDirection={index % 2 === 0 ? "right" : "left"}
                    />
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
