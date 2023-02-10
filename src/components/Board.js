import React from 'react'
import Square from './Square'

const styles={
  border:"6px solid darkgray",
  borderRadius:"10px",
  width: "500px",
  height: "500px",
  margin:"0 auto",
  display: "grid",
  gridTemplate:"repeat(3, 1fr)/ repeat(3,1fr)"
}



const Board = ({squares,onClick}) => {
  return (
   <div style={styles}>

{squares.map((square,index)=>(
<Square key={index} value={square} onClick={()=> onClick(index)} />
))}
 


   </div>
  )
}

export default Board