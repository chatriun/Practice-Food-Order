import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      const resData = await response.json();

      setMeals(resData);
      if (!response.ok) {
        throw new Error(response.message || "something went wrong :(");
      }
    };
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <div className="meal-item" key={meal.id}>
          <MealItem meal={meal} />
        </div>
      ))}
    </ul>
  );
};

export default Meals;
