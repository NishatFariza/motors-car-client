import React from "react";
import { AiFillCar } from "react-icons/ai";

const BuySellCar = () => {
  return (
    <div className=" bg-[url('https://i.ibb.co/Ld4wfH3/buy-Car-bg.jpg')] bg-cover bg-blend-overlay bg-fixed">
      <div className="h-[100vh] mx-10 flex justify-center items-center">
        <div className="bg-white py-10 px-8 mr-8 rounded">
          <AiFillCar className=" text-6xl text-stone-700 mt-6"></AiFillCar>
          <h4 className="primary-color font-bold my-8 text-3xl">
            LOOKING FOR A CAR?
          </h4>
          <p className="text-stone-700 text-justify">
            Our cars are delivered fully-registered with all requirements <br />
            completed. We’ll deliver your car wherever you are.
          </p>
          <button className=" bg-blue-500 px-6 py-2 rounded hover:bg-yellow-400  duration-500 font-semibold text-white my-6">
            INVENTORY
          </button>
        </div>
        <div className="bg-yellow-400 py-10 px-8 rounded">
          <AiFillCar className=" text-6xl text-stone-700 mt-6"></AiFillCar>
          <h4 className="primary-color font-bold my-8 text-3xl">
            WANT TO SELL A CAR?
          </h4>
          <p className="text-white text-justify">
            Receive the absolute best value for your trade-in vehicle. <br /> We
            even handle all paperwork. Schedule appointment!
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
