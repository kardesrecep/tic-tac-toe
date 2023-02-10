import React from 'react'

const styles={
  background: "lightskyblue",
  border: "3px solid #811331",
  fontSize: "30px",
  fontWeight:" 800",
  cursor: "pointer",
  outline: "none"
};




const Square = ({value,onClick}) => {
  return (
   <button style={styles} onClick={onClick}>
    {value}


   </button>
  )
}

export default Square;