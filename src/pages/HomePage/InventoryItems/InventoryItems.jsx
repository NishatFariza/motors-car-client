import axios from "axios";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useCars from "../../../Hooks/UseCars";

const InventoryItems = () => {
  const [cars, setCars] = useCars();

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
      <div className="mt-8 flex justify-end">
        <Link
          to="/manageInventory"
          className="flex justify-center items-center border bg-blue-500 px-6 py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold "
        >
          Manage Inventory
          <RiArrowRightLine className="text-xl ml-2"></RiArrowRightLine>
        </Link>
      </div>
    </div>
  );
};

export default InventoryItems;
