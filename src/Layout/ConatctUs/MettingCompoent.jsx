import React from "react";
import "./MettingCompoent.css";
import { Textarea } from "@chakra-ui/react";

const MettingCompoent = () => {
  return (
    <div className="metting_component">
      {/* ---------------- */}
      <div className="left_metting">
        <p className="top_metting_span"></p>
        <h2>Book a meeting with us</h2>
        <p>
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In
          ornare nisl leo odio magna.
        </p>
      </div>
      {/* ------------------- */}
      <div className="right_metting">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Phone (Optional)" required />
        <Textarea
          rows={5}
          placeholder="Tall us about the project you are working on (Optional)"
        />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default MettingCompoent;
