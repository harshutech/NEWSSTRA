import React from "react";
import loader from "./spinner.gif";

const Newsitem=(props)=>{
  
  let { tittle, description, imageUrl, newsUrl, author, date } = props;

    return (
      
      <div className="my-3">
        <div className="card" style={{ boxShadow: "0px 5px 8px black" }}>
          <img
            src={!imageUrl ? loader : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Newsitem;
