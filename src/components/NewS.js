import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class NewS extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static category = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hii I am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apiKey=016d294554384118997150cf35248f8b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      loading: false,
    });
  };

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?&category=${
    //   this.props.category
    // }&country=${
    //   this.props.country
    // }&apiKey=016d294554384118997150cf35248f8b&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }
  
  prev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?&category=${
    //   this.props.category
    // }&country=${
    //   this.props.country
    // }&apiKey=016d294554384118997150cf35248f8b&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
    // this.setState({
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  next = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?&category=${
    //   this.props.category
    // }&country=${
    //   this.props.country
    // }&apiKey=016d294554384118997150cf35248f8b&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
    // this.setState({
    //   page: this.state.page + 1,
    //   loading: false,
    // });
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 className="text-center">|| TOP HEADLINES ||</h1>
          {this.state.loading && <Spinner />}
          <div className=" p-0 my-1  bg-secondary ">
            <div className="row">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-3" key={element.url}>
                      <NewsItems
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        newUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source}
                      />
                    </div>
                  );
                })}
            </div>

            <div className="container d-flex justify-content-evenly">
              <button
                type="button"
                disabled={this.state.page <= 1}
                className="btn btn-dark "
                onClick={this.prev}
              >
                {" "}
                &larr; PREV
              </button>
              <button
                type="button"
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / 6)
                }
                className="btn btn-dark"
                onClick={this.next}
              >
                NEXT &rarr;{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewS;
