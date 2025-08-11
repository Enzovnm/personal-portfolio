import type { ReactNode } from "react";
import { useDirectoryTreeContext } from "../../hooks/useDirectoryTreeContext";
import { AboutMe } from "../AboutMe/AboutMe";
import { Journey } from "../Journey/Journey";
import { TitleBar } from "../TitleBar/TitleBar";
import { ModalContent } from "./ModalContent";
import { motion } from "motion/react";
import type { INodeContextValue } from "../../contexts/DirectoryTreeContext";
import { Technologies } from "../Technologies/Technologies";

interface IModalMainProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalMain = ({ isOpen, onClose }: IModalMainProps) => {
  const { fileSelected } = useDirectoryTreeContext();

  function showContent(file: INodeContextValue | null): ReactNode {
    let content;
    if (file === null)
      return (
        <div>
          <p>Please select a valid file.</p>
        </div>
      );

    switch (file.name) {
      case "AboutMe.tsx":
        content = <AboutMe />;
        break;
      case "Journey.tsx":
        content = <Journey />;
        break;
      case "Technologies.tsx":
        content = <Technologies />;
        break;
      default:
        content = <div>Developing....</div>;
        break;
    }

    return content;
  }
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.98 }}
        transition={{
          duration: 0.8,
          ease: [0.05, 0.1, 0.3, 1.4],
        }}
        className="bg-white h-full w-full text-black absolute top-0 left-0 scale-75 rounded-xl"
      >
        <TitleBar type="modal" onClose={onClose} />
        <ModalContent>{showContent(fileSelected)}</ModalContent>
      </motion.div>
    )
  );
};
