import React from "react";

import { AiFillDelete } from "react-icons/ai";

const MangeInventory = ({ cars }) => {
  const handleDeleteItem = () => {};
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
              const { name, price, img, supplier } = car;
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
                      onClick={handleDeleteItem}
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
