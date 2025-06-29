import { FaGithub, FaLinkedin } from "react-icons/fa6";
import imgUrl from "../../assets/me.png";
import { BiLogoGmail } from "react-icons/bi";

export const AboutMe = () => {
  return (
    <div className="flex h-full pt-12 w-full">
      <div className=" flex flex-col items-center w-1/2">
        <div className="w-96 h-96 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover "
            src={imgUrl}
          />
        </div>
        <h3 className="text-2xl text-center mt-8">
          Software developer @Albato
        </h3>
        <div className="flex gap-2 mt-8">
          <a href=""><FaLinkedin className="w-10 h-10" /></a>
          <a href=""><FaGithub className="w-10 h-10" /></a>
          <a href=""><BiLogoGmail className="w-10 h-10" /></a>
        </div>
      </div>
      <div className="text-4xl w-1/2">
        <h1 className="">Hi, my name is Enzo! 👋</h1>
        <div className="mt-9 ">
          <h2 className="text-3xl text">About me:</h2>
          <ul className="text-2xl mt-9 space-y-9 text-justify list-disc ">
            <li>
              I'm a passionate programmer, driven by the understanding and
              reflection on contemporary challenges, as well as by the planning
              and construction of efficient algorithms to solve them.
            </li>
            <li>
              I began my journey in programming at the age of 16, when I wrote
              my first "Hello, world" in Python 😆. Around that time, I also
              built my first computer. These were my first steps into the
              physical and logical world of computing, which turned me into a
              lifelong learner and enthusiast of the field.
            </li>
            <li>Specialist in software automation.</li>
            <li>
              Currently in the final semester of my Computer Science degree.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
