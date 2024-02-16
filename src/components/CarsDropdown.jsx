import { useEffect, useState } from "react";
import makesData from "./makes.json";

const CarsDropdown = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(makesData); // Set the cars data directly from the imported JSON
  }, []);
  return (
    <div>
      <p>Car brand</p>

      <select>
        <option value="">Enter the text</option>

        {cars.map((car, index) => (
          <option key={index} value={car}>
            {car}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarsDropdown;
