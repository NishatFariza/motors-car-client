import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
    const {id} = useParams();
  return (
    <div>
      <h2>This is Inventory</h2>
    </div>
  );
};

export default Inventory;
