import axios from "axios";

export default {
  // Gets all articles from NYT API
  getArticles: function(query) {
    return axios.get("/api/articles/" + query);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/saved/", articleData);
  },
  //Gets all articles from MongoDB
  getSaved: function() {
    return axios.get("/api/articles/saved/");
  }
};
