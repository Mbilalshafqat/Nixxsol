import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Maincard = ({ carddata }) => {
  return (
    <div>
      <div className="ux_common_card">
        <div className="ux_common_box_main">
          {carddata &&
            carddata.map((item, index) => {
              return (
                <div className="ux_card_data_box !shadow-md rounded-[4px]">
                  <img src={item.image} alt="" />
                  <h3>{item.projectName}</h3>
                  <p>{item.totalproject}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Maincard;
