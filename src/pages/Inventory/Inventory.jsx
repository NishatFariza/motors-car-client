import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const { img, name, price, supplier, sold, description } = car;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
    axios
      .get(url)
      .then(function (response) {
        setCar(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{sold}</p>
      <p>{supplier}</p>
      <p>{description}</p>
    </div>
  );
};

export default Inventory;
