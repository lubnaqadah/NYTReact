import axios from "axios";
const apiURL = window.location.origin + '/api/articles/';
export default {


	// Gets all Articles
	getArticles: function() {
		return axios.get(apiURL);

	},
	// Deletes the article with the given id
	deleteArticle: function(id) {
		return axios.delete(apiURL + id);
	},
	// Saves an article to the database
	saveArticle: function(articleData) {
		console.log(articleData);

		return axios.post(apiURL, articleData);
	}
};
