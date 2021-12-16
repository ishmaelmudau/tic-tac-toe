import React from 'react'

// Create box 
//  To be used to hold the selections X/O
const style = {
	border: "3px solid black",
	fontSize: "40px",
} 

const Box = (props) => <button name={props.name} style={style} onClick={props.onClick}> {props.value} </button>

export default Box