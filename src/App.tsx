import { SWRConfig } from "swr";

import "./App.css";
import Header from "./components/Header";
import GameContext from "./hooks/useContextGame";
import GameContainer from "./components/GameContainer";
import { fetcher } from "./util";

function App() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <GameContext>
        <div className="h-full bg-white flex">
          <Header />
          <GameContainer />
        </div>
      </GameContext>
    </SWRConfig>
  );
}

export default App;
