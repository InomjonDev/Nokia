import React from "react";
import Banner from "../../components/Banner/Banner";
import bg1 from "../../assets/banner/bg1.webp";
import Card from "../../components/Card/Card";
import { CardPro } from "../../static";
import ComponentsAi from "../../components/ComponentsAi/ComponentsAi";

function Home() {
  return (
    <div>
      <Banner
        img={bg1}
        title={"Network topics for service providers"}
        text={
          "Nokia is a B2B technology innovation leader pioneering the future where networks meet cloud. We are  high-performance connectivity more consumable and sustainable while also securely opening up networks for innovation and collaboration."
        }
      />
      <Card data={CardPro} />
      <ComponentsAi />
    </div>
  );
}

export default Home;
