import React from "react";
import "./CommonCard.css";
import { BsArrowUpRight } from "react-icons/bs";

const CommonCard = ({ carddata }) => {
  return (
    <div className="common_card">
      <div className="common_box_main">
        {carddata &&
          carddata.map((item, index) => {
            return (
              <div className="card_data_box !shadow-md rounded-[4px]">
                <img src={item.image} alt="" />
                <h3>{item.projectName}</h3>
                <p>{item.totalproject}</p>
              </div>
            );
          })}
      </div>
      <button>
        Explore more services <BsArrowUpRight />
      </button>
    </div>
  );
};

export default CommonCard;
