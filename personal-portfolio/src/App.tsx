import { ExplorerBar } from "./components/ExplorerBar/ExplorerBar";
import { MainContent } from "./components/MainContent/MainContent";
import { TabBar } from "./components/TabBar/TabBar";
import { TitleBar } from "./components/TitleBar/TitleBar";
import { CodeContextProvider } from "./contexts/CodeContext";
import { DirectoryThreeContextProvider } from "./contexts/DirectoryTreeContext";

export function App() {
  return (
    <>
      <DirectoryThreeContextProvider>
        <CodeContextProvider>
          <TitleBar />
          <div className="h-full flex">
            <ExplorerBar />
            <div className="flex flex-col w-full">
              <TabBar />
              <MainContent />
            </div>
          </div>
        </CodeContextProvider>
      </DirectoryThreeContextProvider>
    </>
  );
}
