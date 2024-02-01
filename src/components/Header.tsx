import { useContext } from "react";

import { gameContext } from "../hooks/useContextGame";

const categories = [
  { key: "top", name: "Top Games" },
  { key: "new", name: "New Games" },
  { key: "slots", name: "Slot" },
  { key: "jackpots", name: "Jackpots" },
  { key: "live", name: "Live" },
  { key: "blackjack", name: "Blackjack" },
  { key: "roulette", name: "Roulette" },
  { key: "table", name: "Table" },
  { key: "poker", name: "Poker" },
  { key: ["ball", "virtual", "fun"], name: "Other" },
];

const Header = () => {
  const { selectedCategory, setSelectedCategory } = useContext(gameContext);

  return (
    <div className="w-full flex fixed top-0 bg-[#373737] px-[50px] z-10 shadow-lg">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex-1 flex justify-center p-3 text-white cursor-pointer ${
            selectedCategory === category.key ? "bg-[#8dc63f]" : ""
          }`}
          onClick={() => setSelectedCategory(category.key)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Header;
