import axios from "axios";
import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useCars from "../../../Hooks/UseCars";
import Loading from "../../Loading/Loading";

const InventoryItems = () => {
  const [cars, setCars] = useCars();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cars.length > 0) {
      setLoading(false);
    }
  }, [cars]);
  console.log(cars.length);

  // if (loading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="container mx-auto md:py-24 py-12">
      <div className="md:mb-16 mb-8 text-center">
        <h2 className=" md:text-4xl text-2xl font-bold mb-3 primary-color">
          RECENT <span className="text-yellow-400">CARS</span>
        </h2>
        <div className="h-1 w-24 rounded-lg bg-blue-400 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
        {cars.slice(0, 6).map((car) => (
          <Car car={car} key={car._id}></Car>
        ))}
      </div>
      <div className="mt-8 flex sm:justify-end justify-center">
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
