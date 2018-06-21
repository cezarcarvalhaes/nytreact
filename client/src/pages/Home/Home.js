import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Section from "../../components/Section";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import ListWrap from "../../components/ListWrap";
import ListItem from "../../components/ListItem";
import API from "../../utils/API";


class Home extends Component {
  state = {
    articles: [{ _id: 1, headline:{main: "go Brazil"}, web_url: "none" }],
    searchTerm: "",
    numberOfArticles: "5",
    startYear: "",
    endYear: "",
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


  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Section>
          <Card title="search here" icon = "fa  fa-list-alt">
            <Form>
              <Input name="searchTerm" value={this.state.searchTerm} onChange = {this.handleInputChange} label="Seach Term:"/>
              <Select name="numberOfArticles" value={this.state.numberOfArticles} onChange = {this.handleInputChange}/>
              <Input name="startYear" value={this.state.startYear} onChange = {this.handleInputChange} label="Start Year (Optional):"/>
              <Input name="endYear" value={this.state.endYear} onChange = {this.handleInputChange} label="End Year (Optional):"/>
              <Button icon= "fa fa-search" type="submit" text ="Search" onClick = {this.handleFormSubmit}/>
              <Button icon= "fa fa-trash" type="submit" text ="Clear Results"/>
            </Form>
          </Card>
        </Section>
        <Section>
          <Card title="results" icon = "fa fa-table">
            <ListWrap>
              {this.state.articles.map(article => (
                <ListItem
                  key={article._id}
                  title={article.headline.main}
                  url={article.web_url}
                />
              ))}
            </ListWrap>
          </Card>
        </Section>
      </Wrapper>

    )
  }
}

export default Home;
