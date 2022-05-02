import React from "react";
import Banner from "../Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";
import BuySellCar from "../BuySellCar/BuySellCar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <BuySellCar></BuySellCar>
    </div>
  );
};

export default Home;
