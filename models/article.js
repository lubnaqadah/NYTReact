const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: {type:String},
	date:{type: String},
	url:{type: String},
	img:{type: String},
	snippet:{type: String},
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;


