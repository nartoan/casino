import useSWR from "swr";
import { IGame, JackPot } from "../types/game";
import GameCard from "./GameCard";
import { useContext } from "react";
import { gameContext } from "../hooks/useContextGame";
import { fetcher } from "../util";

const GameContainer = () => {
  const { data } = useSWR<IGame[]>("/games.php");
  const { data: jackpots } = useSWR<JackPot[]>("/jackpots.php", fetcher, {
    refreshInterval: 2000,
  });

  const { selectedCategory } = useContext(gameContext);

  const gameIncategories = data?.filter((game) => {
    if (typeof selectedCategory === "string") {
      return game.categories.includes(selectedCategory);
    } else {
      return selectedCategory.some((category) => {
        return game.categories.includes(category);
      });
    }
  });

  return (
    <div className="h-full w-full mt-[80px] mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-[40px]">
      {gameIncategories?.map((game) => (
        <GameCard
          gameData={game}
          key={game.id}
          jackpot={jackpots?.find(({ game: gameId }) => game.id === gameId)}
        />
      ))}
    </div>
  );
};

export default GameContainer;
