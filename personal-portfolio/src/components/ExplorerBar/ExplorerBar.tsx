import { useHamburguerContext } from "../../hooks/useHamburguerContext";
import { ActivityExplorerBar } from "./ActivityExplorerBar";
import { FolderNavigationBar } from "./FolderNavigationBar";

export const ExplorerBar = () => {
  const { isOpen } = useHamburguerContext();

  return (
    <aside
      className={`bg-slate-blue-explorer  ${
        isOpen ? "block fixed w-full h-screen z-50 " : "hidden"
      }   lg:block lg:max-w-80 w-full h-full text-white pl-4 pr-2 text-sm`}
    >
      <ActivityExplorerBar />
      <FolderNavigationBar />
    </aside>
  );
};
