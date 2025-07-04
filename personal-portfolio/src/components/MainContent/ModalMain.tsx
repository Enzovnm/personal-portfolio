import { AboutMe } from "../AboutMe/AboutMe";
import { TitleBar } from "../TitleBar/TitleBar";
import { ModalContent } from "./ModalContent";

interface IModalMainProps {
  isOpen: boolean;
}

export const ModalMain = ({ isOpen }: IModalMainProps) => {
  return (
    isOpen && (
      <div className="bg-white h-full w-full text-black absolute top-0 left-0 scale-75 rounded-xl">
        <TitleBar />
        <ModalContent>
          <AboutMe />
        </ModalContent>
      </div>
    )
  );
};
