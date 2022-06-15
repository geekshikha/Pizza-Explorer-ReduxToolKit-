import React, { useState } from "react";
import { addNewPizza } from "../store/pizzas/slice";
import { useDispatch } from "react-redux";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newPizza = { name, description };
    dispatch(addNewPizza(newPizza));
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPizzaForm;
