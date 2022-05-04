import React from "react";
import useCars from "../../Hooks/UseCars";
import MangeInventory from "../ManageInventory/MangeInventory";

const ManageInventorys = () => {
  const [cars, setCars] = useCars();
  console.log(cars);

  return (
    <div>
      <MangeInventory cars={cars}></MangeInventory>
    </div>
  );
};

export default ManageInventorys;
