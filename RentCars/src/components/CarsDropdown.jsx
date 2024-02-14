import { useEffect, useState } from "react";

const CarsDropdown = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("/src/components/makes.json")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) =>
        console.error("Error fetching makes.json:", error.message)
      );
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
