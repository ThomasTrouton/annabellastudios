import React from "react";
import { Outlet } from "react-router-dom";

function Portfolio() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">Portfolio page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
