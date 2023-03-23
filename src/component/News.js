import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  

  constructor() {
    super();
    // console.log("this is constructor from news");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("this is componentdidmount")
    let url="https://newsapi.org/v2/everything?q=apple&from=2023-03-22&to=2023-03-22&sortBy=popularity&apiKey=8f7fa007a22d4118aa3db4414b9088f5";
    let data = await fetch(url);
    
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})
    console.log(parsedData)
  }
  render() {
    console.log("this is render")
    return (
      <>
        <div className="container my3">
          <h2>NewsMonkey - Top Headline</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4"  key={element.url}>
                  <Newsitem
                   
                    title={element.title?element.title.slice(0,42):""}
                    description={element.description?element.description.slice(0,68):""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
