'use client'
import { useState } from 'react';
// import "./page.css";


const calculateWinner = (board) => {
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // const handleCellClick = (index) => {
  //   if (board[index] || calculateWinner(board)) {
  //     return;
  //   }

  //   const newBoard = [...board];
  //   newBoard[index] = isXNext ? 'X' : 'O';
  //   setBoard(newBoard);
  //   setIsXNext(!isXNext);
  // };

  const handleCellClick = (index) => {
    // Return early if the cell is already filled or if the game is over.
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    if (isXNext) {
      newBoard[index] = 'X';
    } else {
      newBoard[index] = 'O';
    }
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  let status;
if (winner) {
  status = `Winner: ${winner}`;
} else {
  if (isXNext) {
    status = 'Next Player: X';
  } else {
    status = 'Next Player: O';
  }
}

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="game-board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}
