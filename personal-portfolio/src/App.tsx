import { ExplorerBar } from "./components/ExplorerBar/ExplorerBar";
import { TabBar } from "./components/TabBar/TabBar";
import { TitleBar } from "./components/TitleBar/TitleBar";
import { DirectoryThreeContextProvider } from "./contexts/DirectoryTreeContext";

export function App() {
  return (
    <>
      <DirectoryThreeContextProvider>
        <TitleBar />
        <div className="h-full flex">
          <ExplorerBar />
          <TabBar />
        </div>
      </DirectoryThreeContextProvider>
    </>
  );
}
