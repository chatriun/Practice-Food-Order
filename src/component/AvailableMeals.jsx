import { useEffect } from "react";
import { useState } from "react";
import { fetchAvailableMeals } from "../http";
import Meals from "./Meals";
import Error from "./Error";

const AvailableMeals = ({ onSelectMeal }) => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setIsFetching(true);
        const meals = await fetchAvailableMeals();
        setAvailableMeals(meals);
      } catch (error) {
        setError({
          message: error.message || `fail to fetch meals`,
        });
      }
      setIsFetching(false);
    }
    fetchMeals();
  }, []);

  if (error) {
    return <Error title="an error is occurred!" message={error.message} />;
  }
  return (
    <>
      <Meals
        isLoading={isFetching}
        loadingText="fetching meal data..."
        meals={availableMeals}
      />
    </>
  );
};

export default AvailableMeals;
