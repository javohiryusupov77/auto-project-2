import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Katalog = () => {
  const carsPerPage = 6;
  const initialCars = [
    {
      id: 1,
      name: "Mercedes S-Class",
      year: 2020,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 45000,
      mileage: 5000,
      createdIn: "Germany",
      fuelConsumption: "5.6 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      name: "Mercedes E-Class",
      year: 2019,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 40000,
      mileage: 8000,
      createdIn: "Germany",
      fuelConsumption: "6.8 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2021,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 60000,
      mileage: 2000,
      createdIn: "Germany",
      fuelConsumption: "8.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      year: 2018,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 38000,
      mileage: 12000,
      createdIn: "Germany",
      fuelConsumption: "7.5 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 5,
      name: "Mercedes C-Class",
      year: 2022,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 50000,
      mileage: 4000,
      createdIn: "Germany",
      fuelConsumption: "5.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 6,
      name: "Mercedes GLS",
      year: 2021,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 75000,
      mileage: 3000,
      createdIn: "Germany",
      fuelConsumption: "10.2 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
    {
      id: 1,
      name: "Mercedes S-Class",
      year: 2020,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 45000,
      mileage: 5000,
      createdIn: "Germany",
      fuelConsumption: "5.6 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      name: "Mercedes E-Class",
      year: 2019,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 40000,
      mileage: 8000,
      createdIn: "Germany",
      fuelConsumption: "6.8 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      name: "Mercedes AMG GT",
      year: 2021,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 60000,
      mileage: 2000,
      createdIn: "Germany",
      fuelConsumption: "8.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      name: "Mercedes GLE",
      year: 2018,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 38000,
      mileage: 12000,
      createdIn: "Germany",
      fuelConsumption: "7.5 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 5,
      name: "Mercedes C-Class",
      year: 2022,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 50000,
      mileage: 4000,
      createdIn: "Germany",
      fuelConsumption: "5.3 L/100 km",
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 6,
      name: "Mercedes GLS",
      year: 2021,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 75000,
      mileage: 3000,
      createdIn: "Germany",
      fuelConsumption: "10.2 L/100 km",
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
  ];

  const [cars, setCars] = useState(initialCars);
  const [likedCars, setLikedCars] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handleLike = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? {
              ...car,
              likes: likedCars.has(id) ? car.likes - 1 : car.likes + 1,
            }
          : car
      )
    );
    setLikedCars((prevLikes) => {
      const newLikes = new Set(prevLikes);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const getCurrentPageCars = () => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    return cars.slice(startIndex, endIndex);
  };

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">АВТОМОБИЛЬНЫЙ КАТАЛОГ</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {getCurrentPageCars().map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-md">
              <Link to={`/about-cars/${car.id}`}>
                <img
                  src={car.image}
                  alt={`Car ${car.id}`}
                  className="w-full h-40 object-cover mb-2"
                />
              </Link>
              <p className="text-lg font-bold">{car.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  ${car.price.toLocaleString()}
                </p>
                <p className="text-md text-gray-600">{car.year}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-600"> {car.mileage} km</p>
                <p className="text-md text-gray-600">{car.fuelConsumption}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md text-gray-600">
                   {car.createdIn}
                </p>
                <p className="text-md text-gray-600">
                  {car.engineType}
                </p>
              </div>
              <p className="text-sm text-gray-800 mt-2">{car.description}</p>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => handleLike(car.id)}
                  className={`py-1 px-2 rounded ${
                    likedCars.has(car.id) ? "bg-gray-400" : "bg-blue-500"
                  } text-white flex items-center`}
                >
                  {likedCars.has(car.id) ? (
                    <>
                      <BiDislike className="mr-1" />
                    </>
                  ) : (
                    <>
                      <BiLike className="mr-1" />
                    </>
                  )}
                  {car.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-md mr-2 ${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 rounded-md mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-md ml-2 ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>

      <div className="flex items-center justify-end gap-2 m-4">
        <div>
          <b className="text-xl">
            <u>
              <Link className="text-[#293843]" to="/about-cars">
                Перейти в каталог
              </Link>
            </u>
          </b>
        </div>
        <div>
          <MdOutlineArrowRightAlt size={30} />
        </div>
      </div>
    </div>
  );
};

export default Katalog;