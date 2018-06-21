import axios from "axios";

export default {
  // Gets all articles
  getArticles: function(query) {
    return axios.get("/api/articles/" + query);
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(bookData) {
    return axios.post("/api/articles", bookData);
  }
};
