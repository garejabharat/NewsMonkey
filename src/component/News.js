import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: null,
      title:
        "World Baseball Classic final live updates: Trea Turner homers again for Team USA vs. Japan - USA TODAY",
      description: null,
      url: "https://www.usatoday.com/story/sports/mlb/2023/03/21/world-baseball-classic-final-live-updates-team-usa-vs-japan/11514645002/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VYTPMHOGPU74CLI4RXH3HVBLBE_size-normalized.jpg&w=1440",
      publishedAt: "2023-03-22T00:00:00Z",
      content: null,
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Brie Stimson",
      title:
        "Nick Lachey ordered to attend anger management classes, Alcoholics Anonymous after incident with photographer - Fox News",
      description:
        "After a heated incident with a paparazzo in Beverly Hills last year, Nick Lachey was ordered to attend anger management classes, the Los Angeles District Attorney confirmed.",
      url: "https://www.foxnews.com/entertainment/nick-lachey-ordered-attend-anger-management-classes-alcoholics-anonymous-incident-photographer",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/ba66ca19-nick-lachey.jpg",
      publishedAt: "2023-03-21T23:51:00Z",
      content:
        "Nick Lachey has been ordered to attend anger management classes and Alcoholics Anonymous meetings after an incident with a photographer last year. \r\nThe requirements stemmed from the 98 Degrees alum … [+2156 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Badger tunnels halt traffic on Dutch railways - BBC",
      description:
        "Trains in the north and south of the Netherlands are affected, with some services stopping for a week.",
      url: "https://www.bbc.com/news/world-europe-65034493",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/18373/production/_129078199_gettyimages-468208367.jpg",
      publishedAt: "2023-03-21T23:36:42Z",
      content:
        "Badgers burrowing below railway tracks have wreaked havoc on train services in the Netherlands, causing cancellations and line closures.\r\nTrains in the north and south of the country have been affect… [+1618 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Meghan Holohan",
      title:
        "Man diagnosed with stage 4 colon cancer at 29 shares symptoms: 'It hit me pretty hard' - Yahoo News",
      description:
        "More young people are getting colon cancer. A man diagnosed at age 29 shares symptoms as part of this trend — pelvic pain, blood in stool, not being able to ...",
      url: "https://news.yahoo.com/man-diagnosed-stage-4-colon-231851391.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/NFB3Yuzbr0nAlugt_.pE8g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0xNDEy/https://media.zenfs.com/en/nbc_today_217/79d58b78fb6c725b8af9e1fe8ffc1951",
      publishedAt: "2023-03-21T23:18:51Z",
      content:
        "When Brendan Menapace ate, he felt terrible and wanted to nap. He noticed blood in his stool and visited his doctor.\r\nHaving the support of his partner, family and friends made it easier for Brendan … [+7354 chars]",
    },
  ];

  constructor() {
    super();
    console.log("this is constructor from news");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="contaimer my3">
          <h2>NewsMonkey - Top Headline</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4"  key={element.url}>
                  <Newsitem
                   
                    title={element.title.slice(0,42)}
                    description={element.description}
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
