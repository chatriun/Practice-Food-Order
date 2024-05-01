import Button from "../UI/Button";
import currencyFormatter from "../util/formatting";

const MealItem = ({ meal }) => {
  return (
    <li>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <span className="meal-item-description">{meal.description}</span>
        <div className="meal-item-price">
          {currencyFormatter.format(meal.price)}
        </div>
        <p className="meal-item-actions">
          <Button>add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
