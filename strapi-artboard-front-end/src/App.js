import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {

  state = {
    pageTitle: ""
  } 

  async componentDidMount() {

    const titleRes = await axios({
      method: "GET",
      url: "http://localhost:1337/titles"
    });

    const pageTitle = titleRes.data[0].title
    this.setState({pageTitle})
  }

 

  render() {
    
    const {pageTitle} = this.state
    console.log(pageTitle)
    return (
      <div className="header">
        <h1>{pageTitle}</h1>
      </div>
    );
  }
}

export default App;
