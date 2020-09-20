import React from "react";
import EmojiSquare, { IEmojiSquare } from "./EmojiSquare";

export type ISquareList = {
  emojis: IEmojiSquare[];
};

const SquareList = ({ emojis }: ISquareList) => {
  return (
    <>
      {emojis.map((emoji, index) => {
        return (
          <EmojiSquare
            value={emoji.value}
            key={index}
            hidden={emoji.hidden}
            onClick={emoji.onClick}
            id={emoji.id}
          ></EmojiSquare>
        );
      })}
    </>
  );
};

export default SquareList;
