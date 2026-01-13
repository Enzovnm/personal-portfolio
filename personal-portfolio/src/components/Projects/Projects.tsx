import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/swiper-bundle.css";

import oceanSave from "../../assets/ocean-save.png";
import marmitaBem from "../../assets/marmita-do-bem.png";
import livrariaLunarEcommerce from "../../assets/livraria-lunar.png";
import livrariaLunarLandingPage from "../../assets/livraria-lunar-landingpage.jpeg";
import greenSafe from "../../assets/green-safe.png";
import ghgEmissionCalculator from "../../assets/ghg-emissions-calculator.png";
import dataStructure from "../../assets/data-structure.png";
import personalPortfolio from "../../assets/personal-portfolio.png";
import { FiGithub } from "react-icons/fi";
import { GiClick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const projects = [
  {
    key: "oceanSave",
    image: oceanSave,
    github: "https://github.com/Enzovnm/ocean-save-website",
    live: "https://enzovnm.github.io/ocean-save-website/",
  },
  {
    key: "marmitaDoBem",
    image: marmitaBem,
    github:
      "https://github.com/Enzovnm/restaurant-donation-management-platform",
  },
  {
    key: "livrariaLunarEcommerce",
    image: livrariaLunarEcommerce,
    github: "https://github.com/Enzovnm/livraria-lunar-ecommerce",
  },
  {
    key: "livrariaLunarLanding",
    image: livrariaLunarLandingPage,
    github: "https://github.com/Enzovnm/livraria-lunar-landing-page",
  },
  {
    key: "greenSafe",
    image: greenSafe,
    github: "https://github.com/Enzovnm/green-safe",
    live: "https://greensafeaps.netlify.app/",
  },
  {
    key: "ghgCalculator",
    image: ghgEmissionCalculator,
    github:
      "https://github.com/Enzovnm/greenhouse-gases-emission-calculator.git",
  },
  {
    key: "dataStructure",
    image: dataStructure,
    github: "https://github.com/Enzovnm/data-structure-perfomance",
  },
  {
    key: "personalPortfolio",
    image: personalPortfolio,
    github: "https://github.com/Enzovnm/personal-portfolio",
  },
];

export const Projects = () => {
  const { t } = useTranslation("projects");

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardsVisibility = (swiper: SwiperInstance): void => {
    swiper.slides.forEach((slide: HTMLElement, index: number) => {
      if (index < swiper.activeIndex) {
        slide.style.opacity = "0";
        slide.style.pointerEvents = "none";
      } else {
        slide.style.opacity = "1";
        slide.style.pointerEvents = "auto";
      }
    });
  };

  return (
    <>
      <h1 className="text-4xl text-center">{t("projects.title")}</h1>

      <div className="w-full h-full overflow-hidden mt-8">
        <Swiper
          grabCursor
          effect="cards"
          modules={[EffectCards]}
          slidesPerView={1}
          onSwiper={handleCardsVisibility}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            handleCardsVisibility(swiper);
          }}
          cardsEffect={{
            slideShadows: false,
          }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 
                    ${
                      isActive
                        ? "h-[70vh] sm:h-[75vh] lg:h-[80vh] scale-95"
                        : "h-[75vh] sm:h-[80vh] lg:h-[85vh] opacity-85"
                    }
                  `}
                >
                  <img
                    src={project.image}
                    alt={t(`projects.items.${project.key}.title`)}
                    className={`h-full w-full object-cover object-top ${
                      project.key === "Data structure performance"
                        ? "object-fill"
                        : ""
                    }`}
                  />

                  <div className="absolute bottom-0 left-0 p-4 w-full lg:h-24 h-32 flex justify-between bg-black">
                    <div>
                      <h3 className="text-white lg:text-2xl text-xl font-semibold">
                        {t(`projects.items.${project.key}.title`)}
                      </h3>
                      <p className="text-white/80 text-lg mt-1 line-clamp-2">
                        {t(`projects.items.${project.key}.description`)}
                      </p>
                    </div>
                    {project.github && (
                      <div className=" flex items-center justify-center">
                        <a
                          className="w-11 h-11"
                          href={project.github}
                          target="_blank"
                        >
                          <FiGithub className="cursor-pointer w-full h-full text-white" />
                        </a>
                      </div>
                    )}
                  </div>
                  {project.live && (
                    <div className="absolute left-0 p-4 lg:bottom-24 bottom-32 bg-white">
                      <a
                        className="text-lg flex items-center gap-2 text-black shadow-2xl"
                        href={project.live}
                        target="_blank"
                      >
                        {t("projects.liveDemo")}
                        <span>
                          <GiClick />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
