import React from "react";
import "./Saved.css";

const Saved = props =>
<div className="card saved">
<div className="card-header" >
		<a href={props.url} target="_blank">{props.title}</a>

	</div>
	<img className="card-img-top" src={props.img} alt="img"></img>
	<div className="card-block">
		<p className="card-text">{props.snippet}</p>
		<p className="card-text">Published on: {props.date}</p>
		<button type="button" className="note btn btn-sm" value={props.id}  onClick={() => props.remove(props.id)}>Remove</button>

	</div>
</div>;


export default Saved;
