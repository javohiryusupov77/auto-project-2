import React from "react";
import { useParams } from "react-router-dom";
import { useAutoCars } from "./AutoCarsContext";
import StillSelecting from "./StillSelecting";

const CarDetails = () => {
  const { id } = useParams();
  const { cars } = useAutoCars();
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">Car not found</h1>
      </div>
    );
  }
  console.log(car.image);

  return (
    <>
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Car Details
        </h1>
        <div className="mb-6">
          <img
            src={car.image}
            alt={car.description}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold text-gray-800">
            <span className="font-bold">Price:</span>{" "}
            <span className="text-green-600">${car.price}</span>
          </p>
          <p className="text-xl font-semibold text-gray-800">
            <span className="font-bold">Engine Type:</span> {car.engineType}
          </p>
          <p className="text-xl font-semibold text-gray-800">
            <span className="font-bold">Likes:</span> {car.likes}
          </p>
          <p className="text-xl font-semibold text-gray-800">
            <span className="font-bold">Description:</span> {car.description}
          </p>
        </div>
      </div>
      <br /><br /><br /><br />
      <StillSelecting/>
      <br /><br />
    </>
  );
};

export default CarDetails;
