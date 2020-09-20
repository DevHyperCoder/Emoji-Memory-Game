import React, { useState } from "react";
import "./App.css";
import { IEmojiSquare } from "./EmojiSquare";
import SquareList from "./SquareList";

function App() {
  const [emojis, setEmojis] = useState<IEmojiSquare[]>(getEmojiList(2));

  return (
    <div>
      <h1>Emoji Memory Game</h1>
      <SquareList emojis={emojis}></SquareList>
    </div>
  );
}

// HERE i need the state mutation
const onc = (
  event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
):
  | ((event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void)
  | undefined =>{

  const elem = event.target as HTMLHeadingElement;
  const id = Number(elem.id);
  
  const newState:IEmojiSquare[] = [
    ...emojis.slice(0,id),
    {
      ...emojis[id],
      hidden:true
    },
    ...emojis.slice(id+1)
  ]
  // i can not access it
  setEmojis(newState)
  return undefined;
}


function getEmoji(i: number): string {
  const emojiList = ["😻", "🐇", "😋", "🤔", "🧮"];
  return emojiList[i];
}

function getEmojiList(n: number): IEmojiSquare[] {
  let array: IEmojiSquare[] = [];
  array.push({ value: getEmoji(0), hidden: false, onClick: onc, id: "0" });
  array.push({ value: getEmoji(1), hidden: false, onClick: onc, id: "1" });
  array.push({ value: getEmoji(0), hidden: false, onClick: onc, id: "2" });
  array.push({ value: getEmoji(1), hidden: false, onClick: onc, id: "3" });
  return array;
}

export default App;
