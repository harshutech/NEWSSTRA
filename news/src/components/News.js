import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalresult] = useState(0);

  // articles = [
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title:
  //   //     "Justin Roiland: Rick and Morty creator dropped by Hulu as well as Adult Swim",
  //   //   description:
  //   //     "Justin Roiland, who is facing domestic abuse charges, has now lost work with Hulu and Adult Swim.",
  //   //   url: "http://www.bbc.co.uk/news/entertainment-arts-64396728",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/F760/production/_128282336_gettyimages-174363931.jpg",
  //   //   publishedAt: "2023-01-26T12:37:26.3028908Z",
  //   //   content:
  //   //     "US streaming site Hulu has followed TV channel Adult Swim in dropping Rick and Morty co-creator and voice actor Justin Roiland, over charges of domestic violence against an ex-girlfriend.\r\nMr Roiland… [+2235 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "Opium production in Myanmar surges to nine-year high",
  //   //   description:
  //   //     "Civil unrest and economic insecurity may have spurred more farmers into the trade, the UN says.",
  //   //   url: "http://www.bbc.co.uk/news/world-asia-64409019",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/A597/production/_128419324_gettyimages-1093469236.jpg",
  //   //   publishedAt: "2023-01-26T12:37:22.645789Z",
  //   //   content:
  //   //     "The production of opium increased sharply in Myanmar, rising to a nine-year high, according to the UN.\r\nIt touched nearly 795 metric tonnes in 2022, nearly double the production in 2021 - 423 metric … [+3337 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title:
  //   //     "Ukraine war: Russian missiles hit Ukraine day after West's tanks move",
  //   //   description:
  //   //     "One person died and two others were injured after strikes in Kyiv, the city's mayor says.",
  //   //   url: "http://www.bbc.co.uk/news/world-europe-64411259",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/2AAA/production/_128422901_7a84b86d4fe499c20be9e51fd675f0d72eeed14d0_290_5905_33211000x563-1.jpg",
  //   //   publishedAt: "2023-01-26T12:07:21.0676179Z",
  //   //   content:
  //   //     "Russia launched a wave of missiles at Ukraine on Thursday, a day after Germany and the US pledged tanks to aid Kyiv's fight against the invasion.\r\nOne person died and two others were injured after st… [+2584 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "Dad's warning after girl, 14, dies from inhaling deodorant",
  //   //   description:
  //   //     "Giorgia Green's parents want clearer product labelling to warn of the potential dangers.",
  //   //   url: "http://www.bbc.co.uk/news/uk-england-derbyshire-62078939",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/4609/production/_128292971_giorgia9.jpg",
  //   //   publishedAt: "2023-01-26T11:37:23.1469747Z",
  //   //   content:
  //   //     "Media caption, Giorgia's parents want other people to know that aerosol deodorants can be fatal\r\nThe parents of a girl who died after inhaling aerosol deodorant want clearer product labelling to warn… [+5470 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "Asteroid 2023 BU: Space rock to pass closer than some satellites",
  //   //   description:
  //   //     "About the size of a bus, the space rock will whip over the southern tip of South America.",
  //   //   url: "http://www.bbc.co.uk/news/science-environment-64411469",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/7FC8/production/_128421723_gettyimages-1365125730.jpg",
  //   //   publishedAt: "2023-01-26T11:22:19.3654037Z",
  //   //   content:
  //   //     "You definitely shouldn't panic but there is a biggish asteroid about to pass by Earth in the coming hours.\r\nAbout the size of a bus, the space rock, known as 2023 BU, will whip over the southern tip … [+2570 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "Nine Palestinians killed in Israeli raid in Jenin",
  //   //   description:
  //   //     "The heaviest death toll in months comes as troops battle militants in the flashpoint West Bank town.",
  //   //   url: "http://www.bbc.co.uk/news/world-middle-east-64410607",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/14444/production/_128421038_d050d37ae3fb44572cc1e7964dc46687d725e939.jpg",
  //   //   publishedAt: "2023-01-26T11:07:23.8335542Z",
  //   //   content:
  //   //     "Nine Palestinians, including an elderly woman, have been killed in an Israeli military raid in the occupied West bank, Palestinian officials say.\r\nThe Palestinian health minister warned that the situ… [+993 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "Why the number of US mass shootings has risen sharply",
  //   //   description:
  //   //     "There have been 40 mass shootings since the start of 2023 - the highest of any January on record.",
  //   //   url: "http://www.bbc.co.uk/news/world-us-canada-64377360",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/186B/production/_128415260_gettyimages-1246516174.jpg",
  //   //   publishedAt: "2023-01-26T09:22:21.9333955Z",
  //   //   content:
  //   //     "California has woken up to news of three mass shootings this week. On Monday, a gunman opened fire at two plant nurseries in Half Moon Bay, killing seven and injuring one person. \r\nA few hours later,… [+4946 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC Sport",
  //   //   title: "Djokovic's father filmed with Putin supporters",
  //   //   description:
  //   //     "Novak Djokovic's father Srdjan is filmed posing for pictures with supporters of Russia president Vladimir Putin at the Australian Open.",
  //   //   url: "http://www.bbc.co.uk/sport/tennis/64409618",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14F1F/production/_128419758_novakdad.jpg",
  //   //   publishedAt: "2023-01-26T08:37:23.0425181Z",
  //   //   content:
  //   //     "Srdjan Djokovic (left of the centre three) was filmed with supporters of Russia president Vladimir Putin on Wednesday night\r\n<table><tr><th>Australian Open 2023</th></tr>\r\n<tr><td>Venue: Melbourne Pa… [+2052 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title: "This nurse uses humour to highlight serious challenges",
  //   //   description:
  //   //     "As nurses strike in multiple countries, John Dela Cruz went viral on TikTok with his short videos.",
  //   //   url: "http://www.bbc.co.uk/news/world-us-canada-64377361",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/6A7D/production/_128416272_p0dyw2qb.jpg",
  //   //   publishedAt: "2023-01-26T01:37:19.6207969Z",
  //   //   content:
  //   //     "Canadian nurse John Dela Cruz joined TikTok during the Covid pandemic, when he saw a video on the platform asking people to post about undervalued professions. \r\nHe filmed a short video and went vira… [+178 chars]",
  //   // },
  //   // {
  //   //   source: { id: "bbc-news", name: "BBC News" },
  //   //   author: "BBC News",
  //   //   title:
  //   //     "Virginia school had three warnings about 6-year-old's gun, says lawyer",
  //   //   description:
  //   //     "Teacher Abigail Zwerner was left with serious injuries after being shot in her classroom.",
  //   //   url: "http://www.bbc.co.uk/news/world-us-canada-64406295",
  //   //   urlToImage:
  //   //     "https://ichef.bbci.co.uk/news/1024/branded_news/8633/production/_128355343_gettyimages-1246066065.jpg",
  //   //   publishedAt: "2023-01-25T18:52:17.6986895Z",
  //   //   content:
  //   //     "A lawyer for the Virginia teacher shot by her six-year-old student has said school officials had multiple warnings the boy had a gun but failed to take action.\r\nAbigail Zwerner, 25, was released from… [+2334 chars]",
  //   // },
  // ];

  const updatenews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    settotalresult(parseData.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstletter(props.category)} - NEWSSTRA`;
    updatenews();
  }, []);

  const capitalizeFirstletter = (string) => {
    return string.charAt().toUpperCase() + string.slice(1);
  };

  const fetchMoredata = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    settotalresult(parseData.totalResults);
  };

  return (
    <div className="container my-3">
      <h1
        className="text-center "
        style={{ margin: "30px", marginTop: "90px" }}
      >
        NEWSSTRA Top {capitalizeFirstletter(props.category)} Headlines{" "}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoredata}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    tittle={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propsTypes = {
  name: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};

export default News;
