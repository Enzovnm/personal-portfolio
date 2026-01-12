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

const projects = [
  {
    title: "Ocean save",
    description:
      "A project college aiming to bring concepts about marine sustainability",
    image: oceanSave,
    github: "https://github.com/Enzovnm/ocean-save-website",
    live: "https://enzovnm.github.io/ocean-save-website/",
  },
  {
    title: "Marmita do bem",
    description:
      "A project college aiming to bring concepts about SDG 2 (Zero Hunger)",
    image: marmitaBem,
    github:
      "https://github.com/Enzovnm/restaurant-donation-management-platform",
  },
  {
    title: "Livraria Lunar - Ecommerce",
    description: "An e-commerce developed for a fictional bookstore",
    image: livrariaLunarEcommerce,
    github: "https://github.com/Enzovnm/livraria-lunar-ecommerce",
  },
  {
    title: "Livraria Lunar - Landing Page",
    description: "An landing page developed for a fictional bookstore",
    image: livrariaLunarLandingPage,
    github: "https://github.com/Enzovnm/livraria-lunar-landing-page",
  },
  {
    title: "Greensafe",
    description: "An fictional agriculture company",
    image: greenSafe,
    github: "https://github.com/Enzovnm/green-safe",
    live: "https://greensafeaps.netlify.app/",
  },
  {
    title: "GHG Emissions Calculator",
    description:
      "A project college aiming to bring concepts about GHG Emissions",
    image: ghgEmissionCalculator,
    github:
      "https://github.com/Enzovnm/greenhouse-gases-emission-calculator.git",
  },
  {
    title: "Data structure performance",
    description:
      "A project college aiming to bring concepts about performance in sorting algorithms",
    image: dataStructure,
    github: "https://github.com/Enzovnm/data-structure-perfomance",
  },
  {
    title: "Personal portfolio",
    description: "My portfolio",
    image: personalPortfolio,
    github: "https://github.com/Enzovnm/personal-portfolio",
  },
];

export const Projects = () => {
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
      <h1 className="text-4xl text-center">Projects</h1>

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
                    alt={project.title}
                    className={`h-full w-full object-cover object-top ${
                      project.title === "Data structure performance"
                        ? "object-fill"
                        : ""
                    }`}
                  />

                  <div className="absolute bottom-0 left-0 p-4 w-full lg:h-24 h-32 flex justify-between bg-black">
                    <div>
                      <h3 className="text-white lg:text-2xl text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-lg mt-1 line-clamp-2">
                        {project.description}
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
                        Click here to see live demo
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
