import React from "react";
import "./EmojiSquare.css";

export type IEmojiSquare = {
  value: string;
  onClick: (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) =>
    | ((event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void)
    | undefined;
  hidden: boolean;
  id: string;
};

const EmojiSquare = ({ value, onClick, hidden, id }: IEmojiSquare) => {
  return (
    <h1 className="emoji-square" id={id} onClick={onClick}>
      {hidden ? "" : value}
    </h1>
  );
};

export default EmojiSquare;
