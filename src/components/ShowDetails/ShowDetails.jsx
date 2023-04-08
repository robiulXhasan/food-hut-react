import React from "react";

const ShowDetails = ({ isVisible, onClose, detailsData }) => {
  console.log(detailsData);

  const { strMeal, strMealThumb, idMeal, strCategory, strArea, strYoutube, strInstructions } =
    detailsData;
  if (!isVisible) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-scroll">
        
      <div className="md:w-[600px] flex flex-col bg-white p-4 rounded-lg  ">
        <div className="flex justify-between mt-0 mb-4 pb-4 border-b-2">
          <h3 className="text-2xl font-bold ">{strMeal}</h3>
          <button
            onClick={() => onClose()}
            className="text-white font-extrabold bg-red-500  rounded-full text-xl place-self-end h-[30px] w-[30px]"
          >
            X
          </button>
        </div>
        <img src={strMealThumb} alt="Product Image" className="w-full h-64 object-cover" />
        <h4 className="text-md">
          <span className="font-bold">Category:</span> {strCategory}
        </h4>
        <h4 className="text-md">
          <span className="font-bold">Area:</span> {strArea}
        </h4>
        <h4 id="instruction" className="text-md">
          <span className="font-bold">Instructions:</span> {strInstructions?.slice(0, 150)}
        </h4>
        <h4 className="text-md">
          <span className="font-bold">Youtube:</span> {strYoutube}
        </h4>

        <div className="text-right ">
          <button onClick={() => onClose()} className="btn bg-red-600 mt-2 w-1/4 px-10">
            close
          </button>
        </div>
      </div>
      {/* <input type="checkbox" id="foodDetails" className="modal-toggle " />
      <div id="food-details-container" className="modal ">
        <div className="flex justify-between mt-0 mb-4 pb-4 border-b-2">
          <h3 className="text-2xl font-bold ">{strMeal}</h3>
          <label htmlFor="foodDetails" className=" text-2xl font-medium ">
            ✕
          </label>
        </div>
        <img src={strMealThumb} alt="Product Image" className="w-full h-64 object-cover" />
        <h4 className="text-md">
          <span className="font-bold">Category:</span> {strCategory}
        </h4>
        <h4 className="text-md">
          <span className="font-bold">Area:</span> {strArea}
        </h4>
        <h4 id="instruction" className="text-md">
          <span className="font-bold">Instructions:</span> {instruction}
        </h4>
        <h4 className="text-md">
          <span className="font-bold">Youtube:</span> {strYoutube}
        </h4>

        <div className="text-right ">
          <label htmlFor="foodDetails" className="btn bg-red-600 mt-2 w-1/4 px-10">
            close
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default ShowDetails;
