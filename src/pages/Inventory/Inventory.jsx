import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import toast from "react-hot-toast";
import "./Inventory.css";

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
  }, [id]);

  const handleAddStock = (event) => {
    event.preventDefault();
    const newStock = parseInt(event.target.stock.value);
    // console.log(newStock);
    if (isNaN(newStock)) {
      toast.error("Please!! Enter Some Item");
      return;
    }
    const totalStock = parseInt(quantity || 0) + newStock;
    // console.log(quantity);
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
        // console.log(response);
        if (response.data.modifiedCount === 1) {
          toast.success(`${newStock} Added successful`);
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
    // console.log(updateCar);
    setCar(updateCar);

    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    axios
      .put(url, updateCar)
      .then(function (response) {
        // console.log(response);
        if (response.data.modifiedCount === 1) {
          toast.success("Item Delivered");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between items-center">
        <div className="border card-shadow w-9/12 rounded">
          <div className=" flex justify-between">
            <div className="w-6/12 h-full rounded">
              <img className="w-full h-full rounded" src={img} alt="" />
            </div>

            <div className="w-6/12 px-10 pt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl text-blue-400 hover:text-yellow-400 duration-500 font-bold">
                  {name}
                </h2>
                <div className="items-end flex justify-end">
                  <button
                    onClick={handleOndDelivery}
                    className="border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white duration-500 mt-4 font-semibold text-stone-600"
                  >
                    Delivered
                  </button>
                </div>
              </div>
              <p className="text-stone-500 font-semibold mt-2">
                <strong className="primary-color">Supplier: </strong>
                {supplier}
              </p>
              <p className="text-stone-500 font-semibold mt-0">
                <strong className="primary-color">Stock: </strong>
                {quantity}
              </p>
              <p className="text-stone-500 font-semibold mt-0">
                <strong className="primary-color">Sold: </strong> {sold}
              </p>
              <p className="text-yellow-500 font-semibold mt-0">{price}</p>
              <p className="text-stone-700 font-semibold mt-0">Id: {id}</p>
              <div className="text-justify text-stone-500 mt-2">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 text-center">
          <form onSubmit={handleAddStock}>
            <input className="rounded" type="number" name="stock" id="" />
            <br />
            <input
              className="bg-blue-500 px-6 cursor-pointer py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold"
              type="submit"
              value="Add Stock"
            />
          </form>
          <div className="mt-4 w-56 mx-auto">
            <Link
              to="/manageInventory"
              className="flex justify-center items-center border bg-blue-500 px-6 py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold"
            >
              Manage Inventory
              <RiArrowRightLine className="text-xl ml-2"></RiArrowRightLine>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
