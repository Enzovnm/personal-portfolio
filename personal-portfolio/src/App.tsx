import { ExplorerBar } from "./components/ExplorerBar/ExplorerBar";
import { Language } from "./components/Language/Language";
import { MainContent } from "./components/MainContent/MainContent";
import { TabBar } from "./components/TabBar/TabBar";
import { TitleBar } from "./components/TitleBar/TitleBar";
import { CodeContextProvider } from "./contexts/CodeContext";
import { DirectoryThreeContextProvider } from "./contexts/DirectoryTreeContext";
import { HamburguerContextProvider } from "./contexts/HamburguerContext";

export function App() {
  return (
    <>
      <DirectoryThreeContextProvider>
        <CodeContextProvider>
          <HamburguerContextProvider>
            <TitleBar type="screen" />
            <div className="h-full flex">
              <ExplorerBar />
              <div className="flex flex-col w-full">
                <TabBar />
                <MainContent />
              </div>
              <div className="fixed bottom-4 right-4">
                <Language />
              </div>
            </div>
          </HamburguerContextProvider>
        </CodeContextProvider>
      </DirectoryThreeContextProvider>
    </>
  );
}
