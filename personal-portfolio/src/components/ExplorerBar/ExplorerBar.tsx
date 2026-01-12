import { ActivityExplorerBar } from "./ActivityExplorerBar";
import { FolderNavigationBar } from "./FolderNavigationBar";

export const ExplorerBar = () => {
  return (
    <aside className="bg-slate-blue-explorer hidden lg:block max-w-80 w-full h-full text-white pl-4 pr-2 text-sm">
      <ActivityExplorerBar />
      <FolderNavigationBar />
    </aside>
  );
};
