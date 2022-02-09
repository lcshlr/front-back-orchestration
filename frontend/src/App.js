import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    count: 0
  };
  this.fetchPageCount = this.fetchPageCount.bind(this);
}

  fetchPageCount() {
    axios.create({
      baseURL: "http://localhost:3003",
      headers: {
        "Content-type": "application/json",
      },
    }).get('/').then((res) => {
      console.log(res);
      this.setState({
        count: res.data.pageCount
      })
    });
  }

  componentDidMount() {
    this.fetchPageCount();
  }

  render(){
    const { count } = this.state;

    return (
    <div className="App">
        <p>{count}</p>
    </div>
  );
    }
}

export default App;
