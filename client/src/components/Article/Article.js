import React from "react";
import "./Article.css"
const Article = props =>

<div className="card top">
	<div className="card-header" >
		<a href={props.url} target="_blank">{props.title}</a>

	</div>
	<img className="card-img-top" src={props.img} alt="img"></img>
	<div className="card-block">
		<p className="card-text">{props.snippet}</p>
		<p className="card-text">Published on: {props.date}</p>
		<button type="button" className="note btn btn-sm btn-primary" value={props.id}  onClick={() => props.save(props.title, props.snippet, props.date, props.url,props.img)}>Save</button>

	</div>
	
</div>


export default Article;
