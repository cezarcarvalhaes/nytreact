import React, { Component } from 'react';
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import moment from "moment";


class Home extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: "",
    saved: [],
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let query = "?q=" + this.state.searchTerm;
    if (parseInt(this.state.startYear, 10)) {
      query += "&begin_date=" + this.state.startYear + "0101";
    }
    if (parseInt(this.state.endYear, 10)) {
      query += "&end_date=" + this.state.endYear + "0101";
    }
    console.log(query)
    API.getArticles(query)
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  clearResults = () => this.setState({articles: []});

  saveArticle = (headline, date, url, snippet) => {
    let article = {};
    article.title = headline;
    article.date = date;
    article.url = url;
    article.snippet = snippet;
    console.log(article);
    API.saveArticle(article)
      .then(()=> this.getSaved())
      .catch (err => console.log(err));
  };

  componentDidMount() {
    this.getSaved();
  };

  getSaved = () => {
      API.getSaved()
      .then((res)=> this.setState({saved: res.data}))
      .catch(err => console.log(err));
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(()=>this.getSaved())
      .catch (err => console.log(err));

  };

  render() {
    return (
      <div>
          <Card title="Search for Articles" icon = "fa  fa-list-alt">
            <Form>
              <Input name="searchTerm" value={this.state.searchTerm} onChange = {this.handleInputChange} label="Seach Term:"/>
              <Input name="startYear" value={this.state.startYear} onChange = {this.handleInputChange} label="Start Year (Optional):"/>
              <Input name="endYear" value={this.state.endYear} onChange = {this.handleInputChange} label="End Year (Optional):"/>
              <Button icon= "fa fa-search" type="submit" text ="Search" onClick = {this.handleFormSubmit}/>
              <Button icon= "fa fa-trash" type="button" text ="Clear Results" onClick = {this.clearResults}/>
            </Form>
          </Card>
          <br/>
          <Card title="Search Results" icon = "fa fa-table">
        
              {this.state.articles.map(article => (
                <Card
                  key={article._id}
                  title={article.headline.main}
                  url = {article.web_url}
                  right={<Button type ="button" text="Save" onClick = {()=>this.saveArticle(article.headline.main, article.pub_date, article.web_url, article.snippet)}/>}
                >
                <p>Published: {moment(article.pub_date).format("dddd, MMMM Do YYYY")}</p>
                <p>{article.snippet}</p>
                </Card>
              ))}
          </Card>
          <br/>
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

export default Home;
