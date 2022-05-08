import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import toast from "react-hot-toast";
import "./Inventory.css";
import Loading from "../Loading/Loading";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);

  const { img, name, price, supplier, sold, description, quantity } = car;

  useEffect(() => {
    const url = `https://murmuring-temple-22703.herokuapp.com/inventory/${id}`;
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
    if (newStock < 0) {
      toast.error("Negative Value isn't Delivered");
      return;
    }
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
      sold: `${totalStock > 0 ? "Available" : "Sold Out"}`,
      description,
      quantity: totalStock,
      description: description,
    };
    // console.log(updateCar);
    setCar(updateCar);

    const url = `https://murmuring-temple-22703.herokuapp.com/inventory/${id}`;
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
    if (totalStock < 0) {
      toast.error("Stock Out");
      return;
    }
    const updateCar = {
      img: img,
      name: name,
      price: price,
      supplier: supplier,
      sold: `${totalStock > 0 ? "Available" : "Sold Out"}`,
      description,
      quantity: totalStock,
      description: description,
    };
    // console.log(updateCar);
    setCar(updateCar);

    const url = `https://murmuring-temple-22703.herokuapp.com/inventory/${id}`;
    // console.log(url);
    axios
      .put(url, updateCar)
      .then(function (response) {
        // console.log(response);

        if (response.data.modifiedCount === 1) {
          toast.success("1 Item Delivered");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (Object.keys(car).length > 0) {
      setLoading(false);
    }
    // console.log(Object.keys(car).length);
  }, [car]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto sm:py-24 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center h-fit">
        <div className="border card-shadow sm:w-9/12 w-11/12 rounded">
          <div className=" flex  flex-col sm:flex-row justify-between items-center">
            <div className="sm:w-6/12 w-11/12 sm:pt-0 pt-4 h-full rounded pl-2">
              <img className="w-full h-full rounded" src={img} alt="" />
            </div>

            <div className="sm:w-6/12 w-11/12 sm:px-10 px-3">
              <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
                <h2 className="sm:text-3xl text-2xl text-blue-400 hover:text-yellow-400 duration-500 font-bold">
                  {name}
                </h2>
                <div className="items-end flex justify-end">
                  {quantity === 0 ? (
                    <button className="border border-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-white duration-500 mt-4 font-semibold text-stone-600">
                      StockOut
                    </button>
                  ) : (
                    <button
                      onClick={handleOndDelivery}
                      className="border border-blue-400 px-6 py-2 rounded-full hover:bg-blue-400 hover:text-white duration-500 mt-4 font-semibold text-stone-600"
                    >
                      Delivered
                    </button>
                  )}
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
              <p className="text-yellow-500 font-semibold mt-0">${price}</p>
              <p className="text-stone-700 font-semibold mt-0">Id: {id}</p>
              <div className="text-justify text-stone-500 mt-2">
                <p className="mb-5">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-3/12 w-11/12 mx-auto sm:mx-0 sm:mt-0 mt-8  text-center">
          <form onSubmit={handleAddStock}>
            <input className="rounded" type="number" name="stock" id="" />
            <br />
            <input
              className="bg-blue-500 px-6 cursor-pointer py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold"
              type="submit"
              value="Add Stock"
            />
          </form>
          <div className="sm:mt-4 mt-10 w-56 mx-auto">
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
