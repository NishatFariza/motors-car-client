import axios from "axios";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCars from "../../Hooks/UseCars";

const MangeInventory = () => {
  const [cars, setCars] = useCars();
  

  const handleDeleteItem = (id) => {
    console.log(id);
    const url = `http://localhost:5000/inventory/${id}`;
    // console.log(url);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(url)
          .then(function (response) {
            console.log(response);
            if (response.data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const newCars = cars.filter((car) => car._id !== id);
              setCars(newCars);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };
  return (
    <div className="pb-10 mx-10 pt-5">
      <div className="mb-8 flex justify-end">
        <Link
          to="/manageInventory"
          className="flex justify-center items-center border bg-blue-500 px-6 py-3 rounded-full hover:bg-yellow-400 text-white duration-500 mt-4 font-semibold "
        >
          Add Item
          <RiArrowRightLine className="text-xl ml-2"></RiArrowRightLine>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              <th scope="col" className="px-6 py-3 text-right">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              const { name, price, img, supplier, _id } = car;
              // console.log(img);
              return (
                <tr
                  key={car._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <div
                      className="
                   w-20 rounded"
                    >
                      <img className="rounded" src={img} alt="" />
                    </div>
                  </th>
                  <td className="px-6 py-4 font-bold ">{name}</td>
                  <td className="px-6 py-4 text-stone-500">{supplier}</td>
                  <td className="px-6 py-4 font-semibold ">${price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteItem(_id)}
                      href="#"
                      className="font-medium text-3xl text-red-600 dark:text-red-500 hover:underline"
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
