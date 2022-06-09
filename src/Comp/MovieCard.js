import React from "react";

import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./style.css";

const MovieCard = (props) => {
  const { img, title = "title", etoile = 0, id } = props;
  return (
    <div className="box-movie">
      <div className="movie">
        <img src={img} className="poster" alt="img" />
        <div className="movie-details">
          <div className="boxm">
            <h4 className="title" alt="title">
              {title}
            </h4>
            <Link to={`/Information/${id}`} className="buutonLink">
              See more
            </Link>

            <ReactStars
              edit={false}
              Count={5}
              isHalf={true}
              color="black"
              activeColor="orange"
              value={etoile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
