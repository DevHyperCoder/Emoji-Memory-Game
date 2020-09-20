import React from 'react';
import EmojiSquare from './EmojiSquare';

const SquareList = ({emojis}:{emojis:string[]}) =>{
return (
    <>
        {
            emojis.map((emoji,index)=>{
                return <EmojiSquare value={emoji} key={index}></EmojiSquare>
            })
        }
    </>    

    // <EmojiSquare value="😻"></EmojiSquare>
)
}

export default SquareList