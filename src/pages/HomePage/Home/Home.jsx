import React from "react";
import Banner from "../Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";
import BuySellCar from "../BuySellCar/BuySellCar";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <BuySellCar></BuySellCar>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
