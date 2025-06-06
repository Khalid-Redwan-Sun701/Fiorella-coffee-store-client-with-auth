import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import "./App.css";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const loadedCoffees = useLoaderData();
  console.log("loadedCoffees", loadedCoffees);

  // Fix: Ensure coffees is always an array
  const [coffees, setCoffees] = useState(
    Array.isArray(loadedCoffees) ? loadedCoffees : []
  );
  const [scrollY, setScrollY] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  // Refresh AOS when coffees are loaded
  useEffect(() => {
    if (coffees.length > 0) {
      AOS.refresh();
    }
  }, [coffees]);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950">
      <Header></Header>

      {/* Coffee-themed animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Coffee bean shapes */}
        <div className="absolute w-64 h-32 rounded-3xl bg-amber-800/20 top-10 left-10 rotate-45 transform-gpu animate-coffee-float"></div>
        <div
          className="absolute w-48 h-24 rounded-3xl bg-amber-700/20 top-1/4 right-10 rotate-45 transform-gpu animate-coffee-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-56 h-28 rounded-3xl bg-amber-900/20 bottom-1/4 left-1/3 rotate-45 transform-gpu animate-coffee-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-40 h-20 rounded-3xl bg-amber-800/20 bottom-20 right-1/4 rotate-45 transform-gpu animate-coffee-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Coffee splashes */}
        <div
          className="absolute w-32 h-32 rounded-full bg-amber-600/10 blur-md top-1/3 left-1/5 animate-splash"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute w-24 h-24 rounded-full bg-amber-700/10 blur-md top-2/3 right-1/3 animate-splash"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute w-40 h-40 rounded-full bg-amber-800/10 blur-md bottom-1/4 left-2/3 animate-splash"
          style={{ animationDelay: "1.7s" }}
        ></div>

        {/* Coffee steam rising */}
        <div className="absolute w-6 h-32 bg-white/5 blur-xl top-1/4 left-1/4 animate-steam"></div>
        <div
          className="absolute w-8 h-40 bg-white/5 blur-xl top-1/4 right-1/3 animate-steam"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute w-7 h-36 bg-white/5 blur-xl top-1/4 left-2/3 animate-steam"
          style={{ animationDelay: "2.8s" }}
        ></div>

        {/* Background details */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMyAwLTYgMi42ODYtNiA2czMgNiA2IDZ6bTAgMzZjMyAwIDYtMyA2LTZzLTMtNi02LTYtNiAzLTYgNiAzIDYgNiA2em0tMTgtMThjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMgMC02IDIuNjg2LTYgNnMzIDYgNiA2em0wIDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjQTg3NTQ5IiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMzBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNBODc1NDkiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-stone-950 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-950 to-transparent opacity-70"></div>

        {/* Coffee ring stains */}
        <div className="absolute w-32 h-32 border-8 border-amber-800/10 rounded-full top-20 left-1/3 transform rotate-12"></div>
        <div className="absolute w-24 h-24 border-4 border-amber-700/10 rounded-full bottom-40 right-20 transform -rotate-6"></div>
        <div className="absolute w-40 h-40 border-6 border-amber-900/10 rounded-full bottom-1/4 left-20 transform rotate-3"></div>
      </div>

      {/* Main content with enhanced styling */}
      <div className="relative z-10 mx-auto px-5">
        <header className="pt-20 pb-12">
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 mb-6 relative">
              <div
                className="absolute inset-0 bg-amber-600 rounded-full opacity-20 animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute inset-2 bg-amber-500 rounded-full opacity-40 animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-4 bg-amber-400 rounded-full opacity-60 animate-pulse"
                style={{ animationDuration: "3s", animationDelay: "1s" }}
              ></div>
            </div>
            <h1
              className="text-5xl font-extrabold text-center text-amber-100 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hot Hot Cold Cold Coffee
            </h1>
            <p
              className="text-amber-300/90 text-center text-lg font-light tracking-wide"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover our collection of{" "}
              {Array.isArray(coffees) ? coffees.length : 0} premium coffee
              varieties
            </p>
            <div
              className="w-24 h-1 bg-amber-600/80 mx-auto mt-6 rounded-full"
              data-aos="zoom-in"
              data-aos-delay="400"
            ></div>
          </div>
        </header>

        {/* Showing all CoffeeCard */}
        <div className="w-[90%] md:w-4/5 max-w-[1200px] grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto pb-20">
          {Array.isArray(coffees) && coffees.length > 0 ? (
            coffees.map((coffee, index) => (
              <div
                key={coffee._id}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 100}
                data-aos-duration="800"
              >
                <CoffeeCard
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
                />
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10" data-aos="fade-in">
              <p className="text-amber-200 text-lg">
                No coffees available at the moment.
              </p>
              <p className="text-amber-300/70 mt-2">
                Check back later for our fresh brews!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
