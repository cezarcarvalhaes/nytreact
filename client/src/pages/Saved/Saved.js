import React, { Component } from 'react';
import Card from "../../components/Card";
import Button from "../../components/Button";
import API from "../../utils/API";
import moment from "moment";


class Saved extends Component {
  state = {
    saved: [],
  }

  //Waits for the Component to load before grabbing articles from MongoDB
  componentDidMount() {
    this.getSaved();
  };

  //Gets saved articles from MongoDB
  getSaved = () => {
      API.getSaved()
      .then((res)=> this.setState({saved: res.data}))
      .catch(err => console.log(err));
  };

  //Deletes article from DB through unique ID
  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(()=>this.getSaved())
      .catch (err => console.log(err));

  };

  render() {
    return (
      <div>
          <Card title="Saved Articles" icon = "fa fa-heart">
              {this.state.saved.map(article => (
                <Card
                  key={article._id}
                  title={article.title}
                  url = {article.url}
                  right={<Button type ="button" text="Delete" onClick = {()=>this.deleteArticle(article._id)}/>}
                >
                <p>Published: {moment(article.date).format("dddd, MMMM Do YYYY")}</p>
                <p>{article.snippet}</p>
                </Card>
              ))}
          </Card>
          <br/>
      </div>
    )
  }
}

export default Saved;
