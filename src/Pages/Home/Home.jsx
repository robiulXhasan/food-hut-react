import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowFood from "../../components/ShowFood/ShowFood";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const mealData = useLoaderData();
  console.log(mealData);
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <h2 class="my-10 text-center text-2xl md:text-5xl font-bold">
          Your <span class="text-amber-400">Favourite</span> Food
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {mealData.meals.map((meal) => (
            <ShowFood meal={meal} key={meal.idMeal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
