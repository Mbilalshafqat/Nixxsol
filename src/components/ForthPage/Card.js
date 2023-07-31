import React from "react";
import "./PortfolioCard.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="portfolio !overflow-x-hidden">
      <div className="portfolio_child">
        {data &&
          data.map((item, index) => {
            return (
              <div className="portfolio_child_box !overflow-x-hidden">
                <img src={item?.img} alt="" />
                <div className="portfolio_child_box_content">
                  <h2>{item.title && item.title}</h2>
                  <p>{item.dis && item.dis}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
