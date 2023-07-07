import React from "react";
import Banner from "../../components/Banner/Banner";
import bg2 from "../../assets/banner/bg2.webp";

function Products() {
  return (
    <div className="products">
      <Banner
        img={bg2}
        title="Product portfolio"
        text={
          "We are a leading vendor in network and IP infrastructure, software, and related services. We provide a broad range of products, from the hardware components of networks used by communication service providers and increasingly by customers in other select verticals, to software solutions, as well as services to plan, optimize, implement, run and upgrade networks."
        }
      />
    </div>
  );
}

export default Products;
