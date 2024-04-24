import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsFetching(true);
        const response = await fetch("http://localhost:3000/meals");
        const resData = await response.json();
        setMeals(resData);
        setIsFetching(false);
      } catch (error) {}
      setIsFetching(false);
    };
    fetchMeals();

    console.log(meals);
  }, []);

  return (
    <section>
      <div>{isFetching && <p>fetching...</p>}</div>
      <ul id="meals">
        {meals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
