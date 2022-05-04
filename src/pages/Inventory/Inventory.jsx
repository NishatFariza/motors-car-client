import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});

  const { img, name, price, supplier, sold, description, quantity } = car;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    axios
      .get(url)
      .then(function (response) {
        setCar(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleAddStock = (event) => {
    event.preventDefault();
    const newStock = parseInt(event.target.stock.value);
    // console.log(stock);
    const totalStock = parseInt(quantity) + newStock;
    // console.log(totalStock);
    const updateCar = {
      img: img,
      name: name,
      price: price,
      supplier: supplier,
      sold: sold,
      description,
      quantity: totalStock,
      description: description,
    };
    // console.log(updateCar);
    setCar(updateCar);

    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    axios
      .put(url, updateCar)
      .then(function (response) {
        console.log(response);
        if (response.data.modifiedCount === 1) {
          toast.success(`${newStock} Added successful`)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOndDelivery = (event) => {
    const totalStock = parseInt(quantity) - 1;
    // console.log(totalStock);
    const updateCar = {
      img: img,
      name: name,
      price: price,
      supplier: supplier,
      sold: `${totalStock < 1 ? "Sold Out" : sold}`,
      description,
      quantity: totalStock,
      description: description,
    };
    console.log(updateCar);
    setCar(updateCar);

    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    axios
      .put(url, updateCar)
      .then(function (response) {
        console.log(response);
        if (response.data.modifiedCount === 1) {
          toast.success('Item Delivered')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between items-center">
        <div>
          <img src={img} alt="" />
          <h2>{name}</h2>
          <p>{price}</p>
          <p>{sold}</p>
          <p>{supplier}</p>
          <p>{description}</p>
          <p>{quantity}</p>
          <p>Id:{id}</p>
          <button
            onClick={handleOndDelivery}
            className="border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white duration-500 mt-4 font-semibold text-stone-600"
          >
            Delivered
          </button>
        </div>
        <div>
          <form onSubmit={handleAddStock}>
            <input type="number" name="stock" id="" />
            <input type="submit" value="Add Stock" />
          </form>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="flex justify-center items-center border bg-blue-500 px-6 py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold">
          Manage Inventory
          <RiArrowRightLine className="text-xl ml-2"></RiArrowRightLine>
        </button>
      </div>
    </div>
  );
};

export default Inventory;
