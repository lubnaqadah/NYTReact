import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import Main from './components/Main';
import Saved from './components/Saved';
import Article from './components/Article';
import Card from './components/Card';
import API from './utils/API';
import axios from "axios";


class App extends Component {

	state = {
		term: "",
		records:0,
		startDate: "",
		endDate: "",
		savedArticles:[],
		articles:[]
	};

componentDidMount() {
	this.loadArticles();	
}

loadArticles = () =>{
	API.getArticles()

		.then(res =>
			  this.setState({ savedArticles: res.data, term: "", startDate: "", endDate: "" })
			 )
		.catch(err => console.log(err));
}

handleInputChange = event => {
	const value = event.target.value;
	const name = event.target.name;
	this.setState({
		[name]: value
	})

};

handleFormSubmit= event =>{
	event.preventDefault();
	const key ="374ae9e85c894c26916b281311eed868";
	const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key +'&q='+ this.state.term 


	axios.get(queryURL).then(data =>(


		this.setState({
			articles:data.data.response.docs
		})
	))

};

clearResults= event =>{
	this.setState({
		articles:[]
	})
}

save = (title,snippet,date,url,img) =>{
	API.saveArticle({
		title:title,
		snippet:snippet,
		date:date,
		url:url,
		img:img
	})
		.then(res => this.loadArticles())
		.catch(err => console.log(err));
}

remove = (id)=>{
	API.deleteArticle(id)
		.then((res)=> this.loadArticles())
		.catch(err => console.log(err))
}


render() {
	return (
		<div>
			<Title />
			<Main>

				<Form 
					term={this.state.term} 
					records={this.state.records} 
					startDate={this.state.startDate} 
					endDate = {this.state.endDate} 
					handleInputChange={this.handleInputChange} 
					handleFormSubmit={this.handleFormSubmit} 
					clearResults={this.clearResults} />

				<Card header="Top Articles">
					{this.state.articles.map( article =>(
						<Article
							url={article.web_url} title={article.headline.main} date={article.pub_date} snippet={article.snippet} 

							img= {article.multimedia[2] ? "https://nyt.com/" + article.multimedia[2].url : null} id={article._id}
							key={article._id} save={this.save}
							/>
					))}
				</Card>
				
				<Card header="Saved Articles">
				{this.state.savedArticles.map( article =>(
					<Saved
						url={article.url} title={article.title} date={article.date} snippet={article.snippet} img={article.img } id={article._id} remove={this.remove} key={article._id}
						/>
				))}
				</Card>
			</Main>
		</div>
	);
}
}

export default App;
