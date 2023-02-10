import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers/settings";

const styles={
  width:"200px",
  margin:"20px auto",
  color:" darkred",
  fontSize:"2rem"
};

const styleButton={
  border:"7px solid lightskyblue ",
  borderRadius:"5px",
  color:" #811331",
  width:"8rem",
  height:"5rem",
  fontSize:"1.5rem"
}



const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};


  const renderMoves = () =>( 

   <button style={styleButton} onClick={()=> setBoard(Array(9).fill(null))}>
     
     <strong>START GAME</strong>

    </button>
    
    )


  return (
    <>
    <Board squares={board} onClick={handleClick} />
    <div style={styles}>
      <p>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      {renderMoves()}
    </div>
  </>
  );
  }

export default Game;
