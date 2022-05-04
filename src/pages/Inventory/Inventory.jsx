import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    console.log(totalStock);
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
    setCar(updateCar);

    
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
        </div>
        <div>
          <form onSubmit={handleAddStock}>
            <input type="number" name="stock" id="" />
            <input type="submit" value="Add Stock" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
