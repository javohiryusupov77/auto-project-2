import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Katalog = () => {
  const initialCars = [
    {
      id: 1,
      image:
        "https://www.slashgear.com/img/gallery/12-most-expensive-mercedes-of-all-time/l-intro-1701212622.jpg",
      price: 25000,
      engineType: "Hybrid",
      likes: 0,
      description: "A luxurious hybrid vehicle with state-of-the-art features.",
    },
    {
      id: 2,
      image:
        "https://www.slashgear.com/img/gallery/10-most-luxurious-mercedes-benz-cars-ever-made-ranked/l-intro-1686086979.jpg",
      price: 30000,
      engineType: "Fuel",
      likes: 0,
      description: "A fuel-powered car with excellent performance and comfort.",
    },
    {
      id: 3,
      image:
        "https://img.indianautosblog.com/2014/08/Rendering-Mercedes-AMG-GT.jpg",
      price: 15000,
      engineType: "Hybrid",
      likes: 0,
      description: "An affordable hybrid car with a sleek design.",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtdQGTnISBBzFxTL3_hIKovaA8WWbgVNs8Q&s",
      price: 22000,
      engineType: "Fuel",
      likes: 0,
      description: "A stylish fuel car with a high-end finish.",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/originals/b9/05/3a/b9053a37387e8a6ec8da0bff568d9b3b.jpg",
      price: 28000,
      engineType: "Hybrid",
      likes: 0,
      description:
        "A hybrid car that combines performance with fuel efficiency.",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkR3g7jwMjHtAGPiQMWCRPZ_b1DbqrEBRRYw&s",
      price: 35000,
      engineType: "Fuel",
      likes: 0,
      description: "A premium fuel car with advanced technology and features.",
    },
  ];

  const [cars, setCars] = useState(initialCars);
  const [likedCars, setLikedCars] = useState(new Set());

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

  return (
    <div className="p-4">
      <div>
        <b className="text-2xl">АВТОМОБИЛЬНЫЙ КАТАЛОГ</b>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          {cars.map((car) => (
            <div key={car.id} className="border p-4 rounded-lg shadow-md">
              <Link to={`/about-cars/${car.id}`}>
                <img
                  src={car.image}
                  alt={`Car ${car.id}`}
                  className="w-full h-40 object-cover mb-2"
                />
              </Link>
              <p className="text-lg font-bold">${car.price.toLocaleString()}</p>
              <p className="text-sm text-gray-600">{car.engineType}</p>
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

