import React from "react";
import "./styles.css";

export default function Loading() {
  return (
    <div className="_container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
