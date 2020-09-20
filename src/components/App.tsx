// React
import React, { useState } from "react";

// CSS
import "./App.css";

// Types
import { IEmojiSquare } from "./EmojiSquare";

// Components
import SquareList from "./SquareList";

// Helpers
import {getEmojiList} from './EmojiListHelper'

// App component
function App() {
  // State
  const [emojis, setEmojis] = useState<IEmojiSquare[]>(getEmojiList(3));
  const [count, setCount] = useState(0);

  // onClick listener
  const onc = (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ):
    | ((event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void)
    | undefined => {

    if (count >= 2) {
      setTimeout(() => {
        setCount(0);
      }, 1000);
      return undefined;
    }
    const elem = event.target as HTMLHeadingElement;
    const id = Number(elem.id);
    const newState: IEmojiSquare[] = [
      ...emojis.slice(0, id),
      {
        ...emojis[id],
        hidden: false,
      },
      ...emojis.slice(id + 1),
    ];
    setEmojis(newState);

    //Now do checks
    let counmt = 0;
    const all_emojis = emojis.slice();
    all_emojis.forEach((e) => {
      if (!e.hidden) {
        counmt++;
      }
    });

    if (counmt >= 4) {
      console.log("WON");
    }

    return undefined;
  };

  const squareListProps = {
    onClick: onc,
    emojis: emojis,
  };

  return (
    <div>
      <h1>Emoji Memory Game</h1>
      <SquareList {...squareListProps}></SquareList>
    </div>
  );
}



export default App;
