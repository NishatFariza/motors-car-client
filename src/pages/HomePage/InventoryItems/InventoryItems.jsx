import axios from "axios";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const InventoryItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = `https://murmuring-temple-22703.herokuapp.com/cars`;
    (async () => {
      const { data } = await axios.get(url);
      setCars(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="container mx-auto py-24">
      <div className="mb-16 text-center">
        <h2 className=" text-4xl font-bold mb-3 primary-color">
          RECENT <span className="text-yellow-400">CARS</span>
        </h2>
        <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto"></div>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {cars.slice(0, 6).map((car) => (
          <Car car={car} key={car.id}></Car>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
