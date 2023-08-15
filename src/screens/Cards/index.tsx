import React, { FC } from "react";

import Card from "./Card";
import { useCardsStore } from "./store";

import "./styles.css";

const Cards: FC = () => {
  const { cards } = useCardsStore();

  return (
    <div className="card-list">
      {cards.map(({ data, id }) => (
        <Card key={id} id={id} data={data} />
      ))}
    </div>
  );
};

export default Cards;
