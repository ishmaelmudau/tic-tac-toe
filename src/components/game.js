import React, { useState } from 'react'
import Board from './board'

import Message from './message'
import Refresh from './refresh'

const isWon = (board) => {
    // possible winning combinations
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        let [a, b, c] = lines[i];

        if (board[a]!=="" && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// TODO inhannce to take player names 
const Game = () => {
   
    const [board, setBoard] = useState(Array(9).fill("")); 
   
    const [isPlayer, setIsPlayer] = useState("X");
    const [message, setMessage] = useState("Click to Start");

    const refresh  = () => {
        setBoard(Array(9).fill("")); 
        setMessage("Click to start");
        setIsPlayer("X");  
    }
 

    const handleInput = (pos) => {    
        if (isPlayer === "" || board[pos] !== "") {
            return;
        }
       
        const boardCopy = [...board];
        boardCopy[pos] = isPlayer;
        setBoard(boardCopy);  
        
        if (isWon(boardCopy)){

            setMessage(`WON: ${isPlayer}`)
            // Game over reset board
            setIsPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            // Is draw
            setMessage("DRAW")
            setIsPlayer("");
        } else {
            let nextPlayer = (isPlayer === "X") ? "O" : "X"
            setIsPlayer(nextPlayer); // update player
            setMessage(`TURN: ${nextPlayer}`)
        }
    }

    return (<div>
             <Message value={message} />
            <Board onClick={handleInput} value={board} /> 
            <Refresh onClick={refresh} value={'Refresh'} />
        </div>)
}

export default Game