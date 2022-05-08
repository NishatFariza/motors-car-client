import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RiArrowRightLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const MyItem = () => {
  const [cars, setCars] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  // console.log(user?.email);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://murmuring-temple-22703.herokuapp.com/inventory?email=${user.email}`;
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
      .then((response) => {
        // console.log(response.response.status);
        setCars(response.data);
      })
      .catch((error) => {
        if (error?.response?.status === 403) {
          navigate("/login");
          signOut(auth);
          toast.error("You Have No Access!! Log Out!!");
        }
        console.log(error);
      });
  }, [user.email]);

  const handleDeleteItem = (id) => {
    // console.log(id);
    const url = `https://murmuring-temple-22703.herokuapp.com/inventory/${id}`;
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
    <div className="pb-20 sm:mx-10 mx-1 pt-5">
      <div className="mb-8 flex justify-end">
        <Link
          to="/addItem"
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
              <th
                scope="col"
                className="px-0.5 sm:px-6 sm:ml-0 ml-2 py-3 sm:text-base text-xs"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-0.5 sm:px-6 py-3 sm:text-base text-xs"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-0.5 sm:px-6 py-3 sm:text-base text-xs"
              >
                Supplier
              </th>
              <th
                scope="col"
                className="px-0.5 sm:px-6 py-3 sm:text-base text-xs"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-0.5 sm:px-6 py-3 text-right sm:text-base text-xs"
              >
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
                    className="sm:px-6 px-2 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <div
                      className="
                     sm:w-20 w-14 rounded"
                    >
                      <img className="rounded" src={img} alt="" />
                    </div>
                  </th>
                  <td className="px-0.5 sm:px-6 sm:w-auto w-12 py-4 font-bold sm:text-base text-xs ">
                    {name}
                  </td>
                  <td className="px-0.5 sm:px-6 sm:w-auto w-12 py-4 text-stone-500 sm:text-base text-xs">
                    {supplier}
                  </td>
                  <td className="px-0.5 sm:px-6  py-4 sm:font-semibold sm:text-base text-xs">
                    ${price}
                  </td>
                  <td className="px-0.5 sm:px-6 py-4 text-right">
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

export default MyItem;
