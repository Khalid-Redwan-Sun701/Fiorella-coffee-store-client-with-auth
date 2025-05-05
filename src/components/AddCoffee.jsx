import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header/Header";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // Send data to the server
    fetch("https://coffee-store-server-omega-lilac.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header></Header>
      {/* Coffee-themed animated background */}
      <div className="absolute inset-0 bg-amber-50 overflow-hidden pointer-events-none">
        {/* Subtle coffee texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yOSAyNWMxLjY1NyAwIDMtMS4zNDMgMy0zczEuMzQzLTMgMy0zIDMgMS4zNDMgMyAzLTEuMzQzIDMtMyAzLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzLTEuMzQzIDMtMyAzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zeiIgc3Ryb2tlPSIjQTg3NTQ5IiBzdHJva2Utb3BhY2l0eT0iLjA4IiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDMyIDMyKSIvPjwvZz48L3N2Zz4=')]"></div>

        {/* Coffee beans in the background */}
        <div className="absolute w-40 h-20 rounded-3xl bg-amber-900/5 left-10 top-16 rotate-45 transform-gpu animate-coffee-float-slow"></div>
        <div
          className="absolute w-32 h-16 rounded-3xl bg-amber-800/5 right-20 top-40 rotate-45 transform-gpu animate-coffee-float-slow"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute w-36 h-18 rounded-3xl bg-amber-700/5 left-1/4 bottom-20 rotate-45 transform-gpu animate-coffee-float-slow"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute w-28 h-14 rounded-3xl bg-amber-800/5 right-1/4 bottom-40 rotate-45 transform-gpu animate-coffee-float-slow"
          style={{ animationDelay: "3.7s" }}
        ></div>

        {/* Coffee cup outline */}
        <div
          className="absolute w-80 h-80 rounded-full border-2 border-amber-800/5 left-0 -bottom-40 animate-coffee-sway"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full border-2 border-amber-700/5 right-0 -bottom-32 animate-coffee-sway"
          style={{ animationDelay: "1.8s" }}
        ></div>

        {/* Coffee drips */}
        <div className="absolute h-16 w-1 bg-amber-800/5 top-0 left-1/4 animate-drip"></div>
        <div
          className="absolute h-16 w-1 bg-amber-700/5 top-0 left-1/3 animate-drip"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="absolute h-16 w-1 bg-amber-900/5 top-0 left-1/2 animate-drip"
          style={{ animationDelay: "2.3s" }}
        ></div>
        <div
          className="absolute h-16 w-1 bg-amber-800/5 top-0 left-2/3 animate-drip"
          style={{ animationDelay: "3.2s" }}
        ></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-50/70 to-amber-100/30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 p-10 md:p-24">
        {/* Coffee icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            <div className="absolute w-12 h-8 rounded-b-full border-2 border-amber-800 bottom-2 left-4"></div>
            <div className="absolute w-8 h-6 rounded-full border-2 border-amber-800 bottom-7 left-6 animate-handle-sway"></div>
            <div className="absolute w-14 h-10 rounded-b-full bg-amber-100 bottom-3 left-3"></div>
            <div className="absolute w-10 h-6 rounded-t-full bg-amber-700 bottom-7 left-5 animate-coffee-ripple"></div>
            <div className="absolute w-6 h-4 bg-white/20 rounded-full blur-sm bottom-3 left-7 animate-coffee-shine"></div>
          </div>
        </div>

        <h2 className="text-4xl font-extrabold text-center text-amber-900 mb-8">
          Brew Something New
        </h2>
        <p className="text-center text-amber-700 mb-10 max-w-xl mx-auto">
          Add your unique coffee creation to our collection. Fill in the details
          below to share your coffee with the world.
        </p>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-amber-100">
          <form onSubmit={handleAddCoffee} className="space-y-6">
            {/* form row 1 - name & quantity */}
            <div className="md:flex justify-center gap-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Coffee Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Coffee Name"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-4 md:mt-0">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Available Quantity
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
            </div>

            {/* form row 2 - supplier & taste */}
            <div className="md:flex justify-center gap-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Supplier
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-4 md:mt-0">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Taste
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
            </div>

            {/* form row 3 - category and details */}
            <div className="md:flex justify-center gap-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Category
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 mt-4 md:mt-0">
                <label className="label">
                  <span className="label-text font-medium text-amber-900">
                    Details
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                    required
                  />
                </label>
              </div>
            </div>

            {/* form row 4 - photo URL */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-medium text-amber-900">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full bg-white/70 border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-300"
                  required
                />
              </label>
            </div>

            <input
              className="btn btn-block bg-amber-800 hover:bg-amber-900 text-white border-none transition-colors duration-300 mt-8"
              type="submit"
              value="Add Coffee"
            />
          </form>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-amber-800 hover:text-amber-900 transition-colors font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="underline underline-offset-2 decoration-amber-800">
                Back to Coffee Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Add these keyframe animations to your CSS file */}
      <style jsx>{`
        @keyframes coffee-float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-8px) rotate(45deg);
          }
        }

        @keyframes coffee-sway {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
        }

        @keyframes drip {
          0% {
            transform: translateY(-16px);
            opacity: 0;
          }
          30% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }

        @keyframes handle-sway {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes coffee-ripple {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes coffee-shine {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-coffee-float-slow {
          animation: coffee-float-slow 8s ease-in-out infinite;
        }

        .animate-coffee-sway {
          animation: coffee-sway 10s ease-in-out infinite;
        }

        .animate-drip {
          animation: drip 4s linear infinite;
        }

        .animate-handle-sway {
          animation: handle-sway 3s ease-in-out infinite;
        }

        .animate-coffee-ripple {
          animation: coffee-ripple 4s ease-in-out infinite;
        }

        .animate-coffee-shine {
          animation: coffee-shine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AddCoffee;
