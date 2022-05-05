import axios from "axios";
import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/cars`;
    (async () => {
      const { data } = await axios.get(url);
      setCars(data);
      // console.log(data);
    })();
  }, []);
  return [cars, setCars];
};

export default useCars;
