import { AboutMe } from "../AboutMe/AboutMe";
import { TitleBar } from "../TitleBar/TitleBar";
import { ModalContent } from "./ModalContent";

export const ModalMain = () => {
  return (
    <div className="bg-white h-full w-full text-blue-500 absolute top-0 left-0 scale-75 rounded-xl">
      <TitleBar />
      <ModalContent>
        <AboutMe />
      </ModalContent>
    </div>
  );
};
