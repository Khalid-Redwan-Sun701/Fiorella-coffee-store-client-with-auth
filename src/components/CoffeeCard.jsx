import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(
          `https://coffee-store-server-omega-lilac.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div
      className="card bg-gradient-to-br from-amber-50 to-stone-100 shadow-lg overflow-hidden rounded-xl transform transition-all duration-500 ease-in-out hover:scale-105 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxWidth: "350px" }}
    >
      <figure className="p-4 bg-gradient-to-br from-amber-100 to-amber-50 overflow-hidden">
        <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-amber-200 to-transparent opacity-0 transition-opacity duration-500 ${
              isHovered ? "opacity-20" : ""
            }`}
          ></div>
          <img
            src={photo || "/api/placeholder/350/260"}
            alt={name}
            className="w-full h-auto max-h-64 object-contain transition-all duration-700 ease-out"
          />
        </div>
      </figure>

      <div className="card-body p-6 bg-gradient-to-br from-amber-50 to-stone-100 flex flex-col justify-between">
        <div>
          <h2
            className={`card-title text-xl font-bold text-amber-800 transition-all duration-300 ${
              isHovered ? "text-amber-900" : ""
            }`}
          >
            {name}
          </h2>

          <div className="space-y-2 mt-2">
            <p className="flex items-baseline">
              <span className="font-semibold text-amber-700 min-w-20">
                Supplier:
              </span>
              <span className="text-gray-700 ml-2">{supplier}</span>
            </p>
            <p className="flex items-baseline">
              <span className="font-semibold text-amber-700 min-w-20">
                Taste:
              </span>
              <span className="text-gray-700 ml-2">{taste}</span>
            </p>
            <p className="flex items-baseline">
              <span className="font-semibold text-amber-700 min-w-20">
                Quantity:
              </span>
              <span className="text-gray-700 ml-2">{quantity}</span>
            </p>
            <p className="flex items-baseline">
              <span className="font-semibold text-amber-700 min-w-20">
                Category:
              </span>
              <span className="text-gray-700 ml-2">{category}</span>
            </p>
          </div>

          {details && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 italic line-clamp-3">
                {details}
              </p>
            </div>
          )}
        </div>

        <div className="card-actions justify-between mt-4 w-full">
          <button
            className={`relative cursor-pointer  overflow-hidden px-6 py-2 rounded-lg bg-amber-600 text-white transition-all duration-300 ease-in-out hover:bg-amber-700 transform`}
          >
            <span className="relative z-10">Details</span>
            <div
              className={`absolute bottom-0 left-0 w-full h-0 bg-amber-800 transition-all duration-300 ${
                isHovered ? "h-full" : "h-0"
              }`}
              style={{ zIndex: 1, transition: "height 0.3s ease" }}
            ></div>
          </button>

          <div className="flex space-x-2">
            <Link to={`/updateCoffee/${_id}`}>
              <button className=" cursor-pointer  relative group w-10 h-10 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300">
                <img
                  src="https://img.icons8.com/?size=100&id=42449&format=png&color=000000"
                  alt="Edit"
                  className="w-6 h-6"
                />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Edit
                </span>
              </button>
            </Link>

            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className=" cursor-pointer  relative group w-10 h-10 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300"
            >
              <img
                src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000"
                alt="Delete"
                className="w-6 h-6"
              />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 border-2 border-amber-300 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none ${
          isHovered ? "opacity-100" : ""
        }`}
      ></div>
    </div>
  );
};

export default CoffeeCard;
