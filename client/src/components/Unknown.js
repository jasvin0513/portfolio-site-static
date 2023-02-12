import React from "react";
import UnknownCSS from "./Unknown.module.css";

const UnknownPage = () => {
    // Tell user page not found
    return (
    <div className={UnknownCSS.message}>
      <h1 className={UnknownCSS.warning}>You've entered uncharted territories...</h1>
      <p className={UnknownCSS.advice}>Use the navigation bar to return where you came from</p>
    </div>
  )
}

export default UnknownPage;