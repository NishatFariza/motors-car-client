import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { AiFillDelete } from "react-icons/ai";
import useCars from "../../Hooks/UseCars";

const MangeInventory = () => {
  const [cars, setCars] = useCars();

  const handleDeleteItem = (id) => {
    console.log(id);
    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    const confirm = window.confirm("Are You Sure!!");
    if (confirm) {
      axios
        .delete(url)
        .then(function (response) {
          console.log(response);
          if (response.data.deletedCount === 1) {
            toast.success("Deleted Successfully");
            const newCars = cars.filter((car) => car._id !== id);
            setCars(newCars);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Supplier
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              const { name, price, img, supplier, _id } = car;
              return (
                <tr
                  key={car._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <img src={img} alt="" />
                  </th>
                  <td className="px-6 py-4">{name}</td>
                  <td className="px-6 py-4">{supplier}</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteItem(_id)}
                      href="#"
                      className="font-medium text-3xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeInventory;
