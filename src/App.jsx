import { useState } from "react";
import logo from "../public/logo.jpg";
import AvailableMeals from "./component/AvailableMeals";
import Modal from "./component/Modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClickCart = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Modal open={modalIsOpen}>test</Modal>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="logo-react-food-order" />
          <h1>reactfood</h1>
        </div>
        <button onClick={handleClickCart}>
          <h1>Cart</h1>
        </button>
      </div>
      <AvailableMeals />
    </>
  );
};

export default App;
