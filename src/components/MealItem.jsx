import { useContext } from "react";
import Button from "../UI/Button";
import currencyFormatter from "../util/formatting";
import CartContext from "../store/CartContext";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = (item) => {
    cartCtx.addItem(item);
  };

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
          <Button onClick={() => handleAddItem(meal)}>add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
