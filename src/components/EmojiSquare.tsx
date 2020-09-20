import React from "react";
import "./EmojiSquare.css";

export type IEmojiSquare = {
  value: string;
  onClick?:any
  hidden: boolean;
  id: string;
};
const EmojiSquare = ({emoji:{value,id,hidden},onClick}:{emoji:IEmojiSquare,onClick:(e:any)=>any}) => {
  return (
    <h1 className="emoji-square" id={id} onClick={onClick}>
      {hidden ? 'H' : value}
    </h1>
  );
};

export default EmojiSquare;
