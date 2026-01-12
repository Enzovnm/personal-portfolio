import React from "react";
import contactMe from "../../assets/contactMe.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export const ContactMe = () => {
  return (
    <section className="w-full h-full py-12">
      <h1 className="text-4xl text-center  mb-10">Contact Me</h1>

      <div className="flex lg:flex-row flex-col w-full lg:items-center h-full lg:h-5/6 lg:justify-center gap-10">
        <div className="bg-white w-full lg:w-1/2  lg:order-1 order-2 flex items-center justify-around">
          <ul className="lg:space-y-20 space-y-5 ">
            <li>
              <h2 className="text-2xl flex items-center gap-2 font-bold">
                LinkedIn <FaLinkedin />
              </h2>
              <a
                href="https://www.linkedin.com/in/enzovila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.linkedin.com/in/enzovila
              </a>
            </li>

            <li>
              <h2 className="text-2xl flex items-center gap-2 font-bold">
                Email
                <BiLogoGmail />
              </h2>
              <a
                href="mailto:enzovila.monteiro@gmail.com"
                className="text-blue-600 hover:underline"
              >
                enzovila.monteiro@gmail.com
              </a>
            </li>

            <li>
              <h2 className="text-2xl flex items-center gap-2 font-bold">
                GitHub <FaGithub />
              </h2>
              <a
                href="https://github.com/Enzovnm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://github.com/Enzovnm
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full  lg:w-2/3">
          <img
            src={contactMe}
            alt="Contact illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
