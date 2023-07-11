import React from "react";
import Banner from "../../components/Banner/Banner";
import bg4 from "../../assets/banner/bg4.webp";
import Highlites from "../../components/Highlites/Highlites";
import BussinesSuccess from "../../components/BussinesSuccess/BussinesSuccess";
import Card from "../../components/Card/Card";
import { BussinessPro } from "../../static/bussiness";
import "./Training.css";
import MiniBanner from "../../components/MiniBanner/MiniBanner";
import bg5 from "../../assets/banner/bg5.webp";

function Training() {
  return (
    <div className="training">
      <Banner img={bg4} />
      <Highlites />
      <BussinesSuccess />
      <div className="training__title container">
        <h2>Technical certifications</h2>
        <p>
          Nokia's industry-recognized certification programs build your
          technical expertise and enhance your professional standing.
        </p>
      </div>
      <Card data={BussinessPro} />
      <MiniBanner
        img={bg5}
        title={"Learning help and support"}
        text={
          "The NokiaEDU Global Contact Center (GCC) is your primary point of contact for NokiaEDU and is available to help answer your learning-related questions."
        }
      />
    </div>
  );
}

export default Training;
