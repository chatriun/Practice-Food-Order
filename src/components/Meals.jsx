import MealItem from "./MealItem";
import useHttp from "../hook/useHttp";

const option = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", option, []);

  if (isLoading) {
    return <p>fetching data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <ul id="meals">
        {meals.map((meal) => (
          <div className="meal-item" key={meal.id}>
            <MealItem meal={meal} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default Meals;
