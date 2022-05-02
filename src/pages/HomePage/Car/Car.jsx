import React from "react";


const Car = ({ car }) => {
  const { name, img, price, description, supplier, quantity } = car;
  return (
    <div className="border rounded-2xl box-shadow duration-500 cursor-pointer">
      <div className="rounded-2xl">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
      <div className="py-8 px-4">
        <h3 className="text-2xl font-semibold text-blue-400 hover:text-yellow-400 duration-500 ">
          {name}
        </h3>
        <p className="text-slate-800 mt-3">
          <strong>Quantity: </strong>
          {quantity}
        </p>
        <p className="text-slate-800">
          <strong>Price: </strong>
          {price}
        </p>
        <p className="text-slate-800 mb-1">
          <strong>Supplier: </strong>
          {supplier}
        </p>
        <p title={description} className="text-stone-600">
          {description.length >= 150
            ? `${description.slice(0, 150)}...`
            : description}
        </p>
        <button className="border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white duration-500 mt-4 font-semibold text-stone-600">
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default Car;
