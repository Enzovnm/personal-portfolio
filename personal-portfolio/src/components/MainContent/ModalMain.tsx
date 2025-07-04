import { AboutMe } from "../AboutMe/AboutMe";
import { TitleBar } from "../TitleBar/TitleBar";
import { ModalContent } from "./ModalContent";
import { motion } from "motion/react";

interface IModalMainProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalMain = ({ isOpen, onClose }: IModalMainProps) => {
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
        <ModalContent>
          <AboutMe />
        </ModalContent>
      </motion.div>
    )
  );
};
