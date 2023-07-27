import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import useWindowsDimension from "../../hooks/useWindowsDimension";

const Creative = () => {
  const { width } = useWindowsDimension();
  const path = window.location.pathname;

  return (
    <div className={styles.section7}>
      <div
        className="card no-hover specific-card"
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "none",
        }}
      >
        {width < 500 ? (
          <div className="flex text-center !tracking-[20px] justify-center place-items-center text-[30px] !font-bold text-white py-4">
            BEING <br /> CREATIVE
          </div>
        ) : (
          <h1
            style={{ fontSize: "80px", fontWeight: "700" }}
            className="card-title card_title dynamic-spacing text-center "
          >
            BEING CREATIVE
          </h1>
        )}
      </div>
    </div>
  );
};

export default Creative;
