import { LazyLoadImage } from "react-lazy-load-image-component";

import { IGame, JackPot } from "../types/game";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./Ribbon.css";

const GameCard = ({
  gameData,
  jackpot,
}: {
  gameData: IGame;
  jackpot?: JackPot;
}) => {
  return (
    <div className="relative rounded-lg w-full h-auto min-h-[150px] hover:scale-110 hover:cursor-pointer shadow-black">
      <LazyLoadImage
        src={gameData.image}
        alt={gameData.name}
        width={"100%"}
        effect="blur"
        height={"100%"}
        className="rounded-lg"
      />
      {jackpot && (
        <div className="bg-[#373737] bg-opacity-50 absolute top-0 w-full h-6 rounded-tl-lg rounded-tr-lg text-center text-white font-medium">
          £{jackpot?.amount}
        </div>
      )}
      {gameData.categories.includes("new") && <div className="ribbon">NEW</div>}
      {gameData.categories.includes("hot") && <div className="ribbon">HOT</div>}
    </div>
  );
};

export default GameCard;
