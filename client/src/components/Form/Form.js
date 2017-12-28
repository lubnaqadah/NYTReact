import React, {Component} from "react";
import "./Form.css";

const Form = props =>
<div className="card">
<div className="card-header"> <i className='fa  fa-list-alt'>&nbsp; </i>Search Parameters</div>
	<form className="form">
		<div className="form-group">Search Term
			<input className="form-control" value={props.term} name="term" onChange = {props.handleInputChange} type ="text" placeholder="Search Term"/>
		</div>


		<div className="form-group">
			Number of Records to Retrieve:
			<select className="form-control" value={props.records} onChange = {props.handleInputChange} >
				<option value="1">1</option>
				<option value="5">5</option>
				<option value="10">10</option>
			</select>

		</div>

		<div className="form-group">Start Year (Optional):
			<input className="form-control" value={props.startDate} name="startDate" onChange = {props.handleInputChange} type ="text"/>
		</div>

		<div className="form-group">End Year (Optional):
			<input className="form-control" value={props.endDate} name="endDate" onChange = {props.handleInputChange} type ="text"/>
		</div>

		<button className="btn btn-primary" onClick={props.handleFormSubmit}>
			<i className="fa fa-search"> &nbsp; </i>
			Submit</button>

		<button className="btn btn-primary" onClick={props.clearResults}>
			<i className="fa fa-trash">  &nbsp;</i>
			Clear Results</button>

	</form>
</div>

export default Form;