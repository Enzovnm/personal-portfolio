import { ExplorerBar } from "./components/ExplorerBar/ExplorerBar";
import { TitleBar } from "./components/TitleBar/TitleBar";
import { DirectoryThreeContextProvider } from "./contexts/DirectoryTreeContext";

export function App() {
  return (
    <>
      <DirectoryThreeContextProvider>
        <TitleBar />
        <ExplorerBar />
      </DirectoryThreeContextProvider>
    </>
  );
}
