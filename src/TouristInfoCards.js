import React from "react";
// import "./App.css";

const TouristInfoCards = props => {
  // console.log(props)

  return (
    <div className="card-container">
      {props.touristData.map((element, index) => {
        return (
          <div key={index} className="card">
            <h2 className="card-name">{element.city}</h2>
            <img src={element.image} className="card-img-top" />
            <div className="card-body">
              <a
                href={element.link}
                target="_blank"
                className="btn btn-primary"
              >
                Visit {element.city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
