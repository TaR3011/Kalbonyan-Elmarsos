import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsVaild, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const sumbitHandler = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterdAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={sumbitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsVaild && <p>Please enter a vaild amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
