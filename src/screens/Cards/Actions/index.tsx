import React, { FCC } from "react";
import Button from "../../../components/Button";

import { useCardsDispatch, addCard, sortCard, useCardsStore } from "../store";

import "./styles.css";

const Actions: FCC = () => {
  const dispatch = useCardsDispatch();
  const { isSorted } = useCardsStore();

  return (
    <div className="card-actions">
      <Button onClick={() => dispatch(addCard())}>add Card</Button>
      <Button disabled={isSorted} onClick={() => dispatch(sortCard())}>
        sort Card
      </Button>
    </div>
  );
};

export default Actions;
