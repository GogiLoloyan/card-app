import React, { FCC } from "react";

import Button from "../../../components/Button";
import { useCardsDispatch, deleteCard } from "../store";

import "./styles.css";

interface CardProps {
  data: number;
  id: number | string;
}

const Card: FCC<CardProps> = ({ data, id }) => {
  const dispatch = useCardsDispatch();

  return (
    <div className="card">
      <Button onClick={() => dispatch(deleteCard(id))}>X</Button>
      <h2>{data}</h2>
    </div>
  );
};

export default Card;
