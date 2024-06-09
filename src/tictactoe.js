//React DevTools let you check the props and the state of your React components.
// state is private to a component that defines it
// pass down a function from the Board component to the Square component

// state changes, then component re-renders...
import { useState } from "react";

function Square({value,onSquareClick}) {
  //edit the Square component to receive the value prop from the Board component
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   setValue("X");
  // }

  return (
    <button className="square" onClick={onSquareClick} >
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.
//passing props from parent component Board to child component square
export default function Board() {
  // Now all the state management is handled by the Board component!

  const [xIsNext,setXIsNext] =useState(true)
  const [squares, setSquares]=useState(Array(9).fill(null))

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next player pls take your turn: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i){
    // update the square array  
    // with the JS concept of closure ,we are able to access state variable square and setSquare here inside handleClick
    
    if(squares[i] || calculateWinner(squares)){   //avoids value to replace 2nd time/ if already data is present in any square then return
      return
    }
    
    const nextSquare =squares.slice()  //Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.
        
        if(xIsNext){
          nextSquare[i]='X'
        }
        else{
          nextSquare[i]='O'
        }
        
       
        setSquares(nextSquare)
        setXIsNext(!xIsNext)

  }

  return (
    <>
        <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>

      
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      
      
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    
        
      </div>
    </>
  );
}

