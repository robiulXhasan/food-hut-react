import React from "react";
import banner from "../../../public/banner_1.png";

const Banner = () => {
  return (
    <section className="banner">
      <div
        className="relative bg-cover bg-center h-64 md:h-[80vh] "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div
          style={{background: "rgba(16, 15, 15, 0.7)"}}
          className="absolute inset-0 opacity-70"
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center space-y-2 md:space-y-6">
            <h1 className="text-white text-2xl md:text-7xl font-bold">
              Taste Our Delicious <br /> Best Foods
            </h1>
            <p className="text-xs md:text-lg text-white">
              There are many variations of passages of Lorem Ipsum available, but the majority have{" "}
              <br /> suffered alteration in some form, by injected humou.
            </p>
            <input
              id="search-field"
              className="w-1/2 md:w-3/4 px-2  py-1 md:py-3 rounded"
              type="text"
              placeholder="Search any food"
            />
            <button
              id="search-btn"
              className="px-5 py-1 md:py-3 rounded-lg  font-bold border-accent bg-amber-400"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
