import React, { createContext, useState } from "react";

interface IGameContext {
  selectedCategory: string | string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | string[]>>;
}

export const gameContext = createContext<IGameContext>({
  selectedCategory: "slots",
  setSelectedCategory: () => {}
});

const GameContext = (props: { children: any }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | string[]>("slots");
  return (
    <gameContext.Provider
      value={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameContext;