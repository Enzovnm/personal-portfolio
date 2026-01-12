import type { ReactNode } from "react";
import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import { AboutMe } from "../AboutMe/AboutMe";
import { Journey } from "../Journey/Journey";
import { TitleBar } from "../TitleBar/TitleBar";
import { ModalContent } from "./ModalContent";
import { motion } from "motion/react";
import type { INodeContextValue } from "../../contexts/DirectoryTreeContext";
import { Technologies } from "../Technologies/Technologies";
import { Projects } from "../Projects/Projects";
import { ContactMe } from "../ContactMe/ContactMe";

interface IModalMainProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalMain = ({ isOpen, onClose }: IModalMainProps) => {
  const { fileSelected } = useDirectoryTreeContext();

  function showContent(file: INodeContextValue | null): ReactNode | null {
    if (!file) return null;

    switch (file.name) {
      case "AboutMe.tsx":
        return <AboutMe />;
      case "Journey.tsx":
        return <Journey />;
      case "Technologies.tsx":
        return <Technologies />;
      case "Projects.tsx":
        return <Projects />;
      case "ContactMe.tsx":
        return <ContactMe />;
      default:
        return null;
    }
  }

  const content = showContent(fileSelected);
  return (
    isOpen &&
    content && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.05, 0.1, 0.3, 1.4],
        }}
        className="bg-white h-full w-full text-black absolute top-0 left-0 scale-90 lg:scale-75 rounded-xl"
      >
        <TitleBar type="modal" onClose={onClose} />
        <ModalContent>{content}</ModalContent>
      </motion.div>
    )
  );
};
