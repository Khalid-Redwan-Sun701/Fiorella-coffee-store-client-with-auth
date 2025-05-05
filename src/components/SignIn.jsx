import React, { useContext, useEffect } from "react";
import Header from "./Header/Header";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email);
    console.log(password);

    //do firebase work
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        const lastSignInTime = result?.user?.metadata.lastSignInTime;

        const loginInfo = { email, lastSignInTime };

        fetch(`https://coffee-store-server-omega-lilac.vercel.app/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("SignIN Updated info in DB", data);
          });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50">
      <Header />

      {/* Main content with proper top margin to avoid overlap */}
      <div className="pt-16 px-4 flex justify-center items-center min-h-screen">
        <div className="max-w-6xl w-full">
          {/* Coffee-themed heading - centered above both form and benefits */}
          <div className="text-center mb-8" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 my-3">
              Sign In Your Account
            </h1>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Login to unlock premium coffee experiences, exclusive brewing
              tips, and special member discounts on our finest beans.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left side - Sign Up Form */}
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="w-full h-full overflow-hidden bg-white rounded-xl shadow-xl flex flex-col">
                {/* Coffee bean pattern top border */}
                <div className="h-10 bg-amber-800 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-3 bg-amber-200/80 rounded-full transform rotate-45"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Form header */}
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 px-6 py-4 border-b border-amber-200">
                  <h2 className="text-2xl font-bold text-amber-800 text-center">
                    Missing Coffee Store ? Sign In
                  </h2>
                  <p className="text-amber-700 text-sm text-center mt-1">
                    Join our coffee community in less than a minute
                  </p>
                </div>

                <div className="p-6 flex-grow">
                  <div className="fieldset space-y-4">
                    <form onSubmit={handleSignIn}>
                      <div className="relative">
                        <label className="block text-amber-900 text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="pl-10 pr-4 py-3 w-full rounded-lg bg-amber-50 border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 focus:outline-none transition"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-amber-900 text-sm font-medium mb-1">
                          Create Password
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="pl-10 pr-4 py-3 w-full rounded-lg bg-amber-50 border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 focus:outline-none transition"
                            placeholder="••••••••••"
                            required
                          />
                        </div>
                        <div className="mt-2 flex justify-end">
                          <a className="text-amber-600 hover:text-amber-800 text-sm hover:underline cursor-pointer transition-colors">
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition flex items-center justify-center"
                        >
                          <span className="mr-2">☕</span>
                          <span>Start Your Coffee Journey</span>
                        </button>

                        <div className="text-center mt-6 flex items-center justify-center">
                          <div className="h-px bg-amber-200 flex-grow"></div>
                          <p className="text-amber-600 px-4">or</p>
                          <div className="h-px bg-amber-200 flex-grow"></div>
                        </div>

                        <div className="text-center mt-4">
                          <p className="text-amber-800">
                            Not a member?
                            <Link to="/signUp">
                              <a className="text-amber-600 hover:text-amber-900 ml-1 font-medium hover:underline cursor-pointer transition-colors">
                                SignUp
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Coffee membership benefits */}
            <div
              className="w-full lg:w-1/2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="bg-gradient-to-br from-amber-900 to-amber-600 rounded-xl shadow-xl h-full flex flex-col overflow-hidden">
                {/* Coffee cup steam animation at the top */}
                <div className="h-14 bg-amber-900 flex items-center justify-center relative">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center z-10">
                    <span className="text-amber-800 text-2xl">☕</span>
                  </div>
                  {/* Steam animation */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-2 bg-white/30 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Benefits header */}
                <div className="px-6 py-5 text-white border-b border-amber-500/30">
                  <h2 className="text-2xl font-bold text-center">
                    Membership Benefits
                  </h2>
                  <p className="text-amber-200 text-sm text-center mt-1">
                    Join now and enjoy these exclusive perks
                  </p>
                </div>

                <div className="p-6 flex-grow">
                  <div className="space-y-4">
                    <div
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-center transform transition hover:scale-105 hover:bg-white/20"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-full bg-amber-300 flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-amber-800 text-xl">☕</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          10% Off First Order
                        </h4>
                        <p className="text-amber-200 text-sm">
                          Start your coffee journey with an exclusive discount
                          on premium beans
                        </p>
                      </div>
                    </div>

                    <div
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-center transform transition hover:scale-105 hover:bg-white/20"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-full bg-amber-300 flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-amber-800 text-xl">🎁</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Free Monthly Tasting
                        </h4>
                        <p className="text-amber-200 text-sm">
                          Join our exclusive coffee tasting events and expand
                          your palate
                        </p>
                      </div>
                    </div>

                    <div
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-center transform transition hover:scale-105 hover:bg-white/20"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-full bg-amber-300 flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-amber-800 text-xl">📝</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Brewing Guides
                        </h4>
                        <p className="text-amber-200 text-sm">
                          Access premium brewing techniques from certified
                          coffee experts
                        </p>
                      </div>
                    </div>

                    <div
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 flex items-center transform transition hover:scale-105 hover:bg-white/20"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      <div className="w-12 h-12 shrink-0 rounded-full bg-amber-300 flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-amber-800 text-xl">🌟</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Early Access
                        </h4>
                        <p className="text-amber-200 text-sm">
                          Be the first to try our limited edition seasonal
                          roasts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
