import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ShowDetails from "../ShowDetails/ShowDetails";

const ShowFood = ({ meal }) => {
  const [showModal, setShowModal] = useState(false);
  const { strMeal, strMealThumb, idMeal } = meal;
  const [detailsData, setDetailsData] = useState(0);

  const loadDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsData(data.meals[0]));
  };

  return (
    <Fragment>
      <div className="mx-auto bg-white border rounded-md shadow-md overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img src={strMealThumb} alt="Product Image" className="w-full h-64 object-cover" />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-lg md:text-2xl font-bold mb-4">{strMeal}</h2>
          <p className="text-gray-700 mb-10">
            There are many variations of passages of available, but the majority have suffered
          </p>
          <div className="text-center md:text-start">
            <button
              onClick={() => {
                loadDetails(idMeal);
                setShowModal(true);
              }}
            >
              <label
                htmlFor="foodDetails"
                className="bg-amber-400  hover:bg-white text-black border hover:border-amber-400 font-bold py-2 px-4 rounded"
              >
                View Details
              </label>
            </button>
          </div>
        </div>
      </div>
      <ShowDetails
        isVisible={showModal}
        detailsData={detailsData}
        onClose={() => setShowModal(false)}
      ></ShowDetails>
    </Fragment>
  );
};

export default ShowFood;
