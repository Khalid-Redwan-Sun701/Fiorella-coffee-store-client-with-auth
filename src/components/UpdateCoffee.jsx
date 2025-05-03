import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header/Header';

const UpdateCoffee = () => {
  const updatedCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    updatedCoffee;
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for subtle parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    // Send updated data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 relative overflow-hidden">
     
     <Header></Header>
      {/* Coffee-themed animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coffee bean shapes - very subtle */}
        <div className="absolute w-64 h-32 rounded-3xl bg-amber-800/5 top-10 left-10 rotate-45 transform-gpu animate-coffee-float"></div>
        <div
          className="absolute w-48 h-24 rounded-3xl bg-amber-700/5 top-1/4 right-10 rotate-45 transform-gpu animate-coffee-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute w-56 h-28 rounded-3xl bg-amber-900/5 bottom-1/4 left-1/3 rotate-45 transform-gpu animate-coffee-float"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Subtle coffee steam shapes */}
        <div className="absolute w-6 h-32 bg-amber-700/5 blur-xl top-1/4 left-1/4 animate-steam"></div>
        <div
          className="absolute w-8 h-40 bg-amber-800/5 blur-xl top-1/4 right-1/3 animate-steam"
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Coffee ring stains - very subtle */}
        <div className="absolute w-32 h-32 border-4 border-amber-800/5 rounded-full top-20 left-1/3 transform rotate-12"></div>
        <div className="absolute w-40 h-40 border-4 border-amber-700/5 rounded-full bottom-1/4 left-20 transform rotate-3"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMyAwLTYgMi42ODYtNiA2czMgNiA2IDZ6bTAgMzZjMyAwIDYtMyA2LTZzLTMtNi02LTYtNiAzLTYgNiAzIDYgNiA2em0tMTgtMThjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMgMC02IDIuNjg2LTYgNnMzIDYgNiA2em0wIDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjQTg3NTQ5IiBzdHJva2Utb3BhY2l0eT0iLjAyIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMzBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNBODc1NDkiIHN0cm9rZS1vcGFjaXR5PSIuMDIiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="bg-white/60 backdrop-blur-sm shadow-xl rounded-lg m-6 p-8 md:p-16 transition-all duration-500 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 relative">
              <div
                className="absolute inset-0 bg-amber-600 rounded-full opacity-10 animate-pulse"
                style={{ animationDuration: '3s' }}
              ></div>
              <div
                className="absolute inset-2 bg-amber-500 rounded-full opacity-20 animate-pulse"
                style={{ animationDuration: '3s', animationDelay: '0.5s' }}
              ></div>
              <div
                className="absolute inset-4 bg-amber-400 rounded-full opacity-30 animate-pulse"
                style={{ animationDuration: '3s', animationDelay: '1s' }}
              ></div>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-center text-amber-800 mb-8 animate-slide-up">
            Update the Coffee: <span className="text-amber-700">{name}</span>
          </h2>

          <form onSubmit={handleUpdateCoffee} className="animate-fade-in">
            {/* form row 1 - Name & Quantity */}
            <div className="md:flex justify-center mb-8">
              <div className="form-control md:w-1/2 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">Coffee Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee Name"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-8 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
            </div>

            {/* form row 2 - Supplier & Taste */}
            <div className="md:flex justify-center mb-8">
              <div className="form-control md:w-1/2 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-8 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
            </div>

            {/* form row 3 - Category & Details */}
            <div className="md:flex justify-center mb-8">
              <div className="form-control md:w-1/2 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
              <div className="form-control md:w-1/2 md:ml-8 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
                <label className="label">
                  <span className="label-text text-amber-900">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
                />
              </div>
            </div>

            {/* form row 4 - Photo URL */}
            <div className="form-control w-full mb-8 transition-all duration-300 transform hover:translate-y-1 hover:shadow-md rounded-lg p-2">
              <label className="label">
                <span className="label-text text-amber-900">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input bg-amber-50 border-amber-200 focus:border-amber-400 focus:bg-white w-full transition-all duration-300"
              />
            </div>

            <input
              className="btn btn-block bg-amber-700 hover:bg-amber-800 text-amber-50 border-0 transition-all duration-300 transform hover:scale-[1.01] shadow-lg hover:shadow-amber-700/20"
              type="submit"
              value="Update Coffee"
            />
          </form>

          <div
            className="mt-10 flex justify-center animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <Link to="/">
              <span className="text-amber-800 hover:text-amber-600 transition-all duration-300 underline underline-offset-4 decoration-amber-300 hover:decoration-amber-500">
                Back to All Coffees
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Add these keyframe animations */}
      <style jsx>{`
        @keyframes coffee-float {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }

        @keyframes steam {
          0% {
            opacity: 0;
            transform: translateY(0) scaleX(1);
          }
          20% {
            opacity: 0.15;
          }
          40% {
            transform: translateY(-30px) scaleX(1.1);
          }
          60% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-60px) scaleX(1.5);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-coffee-float {
          animation: coffee-float 8s ease-in-out infinite;
        }

        .animate-steam {
          animation: steam 6s ease-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UpdateCoffee;
