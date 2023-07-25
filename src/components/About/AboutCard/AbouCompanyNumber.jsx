import React from "react";

const AbouCompanyNumber = ({
  title,
  discriptrion,
  secondDiscription,
  number = true,
}) => {
  return (
    <div className="hero_facts">
      <div className="left_facts">
        <h2>{title}</h2>
      </div>
      <div className="right_facts">
        <h3>{discriptrion}</h3>
        <p>{secondDiscription}</p>
        {number && (
          <div className="facts_numbring">
            <div className="numbring_box">
              <h2>100+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="numbring_box">
              <h2>05+</h2>
              <p>Years in business</p>
            </div>
            <div className="numbring_box">
              <h2>50+</h2>
              <p>Total Memebers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AbouCompanyNumber;
