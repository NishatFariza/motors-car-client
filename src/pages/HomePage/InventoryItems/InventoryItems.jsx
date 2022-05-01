import axios from "axios";
import React, { useEffect, useState } from "react";
import Car from "../Car/car";

const InventoryItems = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/cars`;
    (async () => {
      const { data } = await axios.get(url);
      setCars(data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-2xl font-semibold">Recent Cars</h2>
      <div>
        {cars.map((car) => (
          <Car car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
