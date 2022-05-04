import axios from "axios";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const InventoryItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/cars`;
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
          <Car car={car} key={car._id}></Car>
        ))}
      </div>
      <div className="text-right mt-6">
        <button className="border bg-blue-500 px-6 py-2 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold text-stone-600">
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default InventoryItems;
