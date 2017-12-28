import React from "react";
import "./Card.css";

const Card = props =>

<div className='card wraper'>
	<div className='card-header'> <p> <i className="fa fa-table">&nbsp; </i> {props.header}</p></div>
	<div className='card-block '>{props.children}</div>
</div>

export default Card;