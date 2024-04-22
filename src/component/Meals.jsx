const Meals = ({ isLoading, loadingText, meals, onSelectMeal }) => {
  return (
    <section>
      {isLoading && <p>{loadingText}</p>}
      {!isLoading && meals.length > 0 && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <article>
                <img
                  src={`http://localhost:3000/${meal.image}`}
                  alt={meal.image}
                  className="meal-item img"
                />
                <h3>{meal.name}</h3>
                <span className="meal-item-price">{meal.price}</span>
                <span className="meal-item-description">
                  {meal.description}
                </span>
                <button onClick={() => onSelectMeal(meal)}>
                  <p> Add to cart</p>
                </button>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Meals;
