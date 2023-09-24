import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgUrl, newUrl, author, date ,source} = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{ backgroundColor: "#161718", color: "white" }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" data-bs-theme="dark">
              <small className="text-body-secondary">
                By {author} on <strong>{new Date(date).toUTCString()}</strong>
              </small>
            </p>
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{left: '90%', zIndex: "1" }}
            >
              {source.name}
            </span>
            <a
              href={newUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm  btn-primary"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
