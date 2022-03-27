import { useState } from 'react';
import logo from './logo.svg';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("")
  const [board,setBoard] = useState(emptyBoard)
  const[currentPlayer,setCurrentPlayer] = useState("X")

  const handleCellClick = (index) => {

    if(board[index] !== "") return null;
    setBoard(board.map((item,itemIndex)=> itemIndex === index ? currentPlayer : item ))

    setCurrentPlayer(currentPlayer === "X" ? "O": "X")
  }
  return (
    <main>
      <h1 className = "title"> Jogo da Velha</h1>

      <div className="board">
        {board.map((item,index) => (
         <div 
         key ={index}
         className={`cell ${item}`}
         onClick={()=>handleCellClick(index)}
         >
           {item}
           </div>
  ))}
        

      </div>
    </main>
   );
}

export default TicTacToe;
