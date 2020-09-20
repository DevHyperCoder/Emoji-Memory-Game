import React from "react";
import EmojiSquare, { IEmojiSquare } from "./EmojiSquare";

export type ISquareList = {
  emojis: IEmojiSquare[];
};

const SquareList = ( {emojis,onClick}:{emojis:IEmojiSquare[],onClick:(e:any)=>any}) => {
  console.log(onClick)
  return (
    <>
      {emojis.map((emoji, index) => {
        const emojiSquareProps = {
          emoji:emoji,
          onClick:onClick,
        }
        return (
          <EmojiSquare
            {...emojiSquareProps}
            key={index}
          ></EmojiSquare>
        );
      })}
    </>
  );
};

export default SquareList;
