import React from "react";
import { AiFillCar } from "react-icons/ai";

const BuySellCar = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/Ld4wfH3/buy-Car-bg.jpg')] bg-cover bg-blend-overlay bg-fixed">
      <div className="sm:h-[100vh] h-auto mx-10 flex flex-col sm:flex-row justify-center items-center">
        <div className=" bg-white sm:py-10 sm:px-8 sm:mr-8 py-4 px-5 mt-8 sm:mb-8 rounded">
          <AiFillCar className=" text-6xl text-stone-700 mt-6"></AiFillCar>
          <h4 className="primary-color font-bold sm:my-8 my-4 sm:text-3xl text:2xl">
            LOOKING FOR A CAR?
          </h4>
          <p className="text-stone-700  sm:text-xl text-sm ">
            Our cars are delivered full-registered with all requirements
            completed. We’ll deliver your car wherever you are.
          </p>
          <button className=" bg-blue-500 px-6 py-2 rounded hover:bg-yellow-400  duration-500 font-semibold text-white my-6">
            INVENTORY
          </button>
        </div>
        <div className=" bg-yellow-400 sm:py-10 sm:px-8 py-4 px-5 mt-8 sm:mb-8 mb-8 rounded">
          <AiFillCar className=" text-6xl text-stone-700 mt-6"></AiFillCar>
          <h4 className="primary-color font-bold sm:my-8 my-4 sm:text-3xl text:2xl">
            WANT TO SELL A CAR?
          </h4>
          <p className="text-white sm:text-xl text-sm">
            Receive the absolute best value for your trade-in vehicle. We even
            handle all paperwork. Schedule appointment!
          </p>
          <button className=" bg-blue-500 px-6 py-2 rounded hover:bg-white hover:text-black duration-500 my-6 font-semibold text-white">
            SELL YOUR CAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySellCar;
