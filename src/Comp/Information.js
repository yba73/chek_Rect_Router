import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Information = ({ movie }) => {
  const navigate = useNavigate();
  const params = useParams();
  const info = movie.find((el) => el.id === +params.id);
  console.log(params);

  return (
    <div>
      <button className="buutonLink" onClick={() => navigate(-1)}>
        Go back
      </button>
      <div>
        <h1 style={{ color: "green" }}>{info.title}</h1>
        <h2 style={{ color: "#512E5F" }}>Description :</h2>
        <h5 style={{ color: "white" }}>{info.description}</h5>
        <div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src={info.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
