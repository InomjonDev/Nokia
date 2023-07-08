import React from "react";
import Banner from "../../components/Banner/Banner";
import bg4 from "../../assets/banner/bg4.webp";
import Highlites from "../../components/Highlites/Highlites";

function Training() {
  return (
    <div className="training">
      <Banner img={bg4} />
      <Highlites />
    </div>
  );
}

export default Training;
