import React from "react";
import Banner from "../../components/Banner/Banner";
import bg3 from "../../assets/banner/bg3.webp";
import MiniCard from "../../components/MiniCard/MiniCard";
import { ServicPro } from "../../static/services";

function Services() {
  return (
    <div className="services">
      <Banner
        img={bg3}
        title={"Services"}
        text={
          "Deliver superior end user experiences, seize new revenue opportunities and optimize network and operational performance through our comprehensive services portfolio. Our services teams offer expertise and global reach that will enable you to realize the potential of technology."
        }
      />
      <MiniCard data={ServicPro} />
    </div>
  );
}

export default Services;
