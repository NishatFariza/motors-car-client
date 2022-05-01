import axios from "axios";
import React, { useEffect, useState } from "react";

const InventoryItems = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/cars`;
    (async () => {
      const { data } = await axios.get(url);
      console.log(data);
    })();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-2xl font-semibold">Recent Cars</h2>
      <div className=""></div>
    </div>
  );
};

export default InventoryItems;
