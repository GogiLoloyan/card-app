import React, { createContext, FCC, useContext, useReducer } from "react";

const CardsStoreContext = createContext(null as unknown as CardsStore);
const CardsDispatchContext = createContext(
  null as unknown as React.Dispatch<any>
);

interface Card {
  id: number | string;
  data: number;
}

interface CardsStore {
  cards: Card[];
  isSorted: boolean;
}

const reducer = (state: CardsStore, action: any) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        isSorted: false,
        cards: [
          ...state.cards,
          {
            data: (Date.now() + Math.random()) % 1000 | 0,
            id: (Date.now() + Math.random()) % 1000 | 0,
          },
        ],
      };
    case "DELETE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case "SORT_CARD":
      return {
        ...state,
        isSorted: true,
        cards: state.cards.sort((cardA, cardB) => cardA.data - cardB.data),
      };
  }
  return state;
};

export const addCard = () => ({
  type: "ADD_CARD",
});

export const deleteCard = (id: number | string) => ({
  type: "DELETE_CARD",
  payload: id,
});

export const sortCard = () => ({
  type: "SORT_CARD",
});

const CardsContextProvider: FCC = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, {
    isSorted: true,
    cards: [],
  });

  return (
    <CardsStoreContext.Provider value={store}>
      <CardsDispatchContext.Provider value={dispatch}>
        {children}
      </CardsDispatchContext.Provider>
    </CardsStoreContext.Provider>
  );
};

export const useCardsStore = () => useContext(CardsStoreContext);
export const useCardsDispatch = () => useContext(CardsDispatchContext);

export default CardsContextProvider;
