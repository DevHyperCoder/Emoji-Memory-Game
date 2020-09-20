import {IEmojiSquare} from './EmojiSquare'

// To get the specified emoji
export function getEmoji(i: number): string {
    const emojiList = ["😻", "🐇", "😋", "🤔", "🧮"];
    return emojiList[i];
  }
  
  // To get the inital emoji list
 export function getEmojiList(n: number): IEmojiSquare[] {
    let array: IEmojiSquare[] = [];
    array.push({ value: getEmoji(0), hidden: true, id: "0" });
    array.push({ value: getEmoji(1), hidden: true, id: "1" });
    array.push({ value: getEmoji(0), hidden: true, id: "2" });
    array.push({ value: getEmoji(1), hidden: true, id: "3" });
    return array;
  }