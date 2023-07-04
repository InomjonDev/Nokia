import React from "react";
import Banner from "../../components/Banner/Banner";
import bg1 from "../../assets/banner/bg1.webp";

function Home() {
  return (
    <div>
      <Banner img={bg1} title={"Network topics for service providers"} />
    </div>
  );
}

export default Home;
