import React from "react";
import logo from "./logo.svg";
import foods from "./foods";
import { choice, remove } from "./helpers";

const App = () => {
  const food = choice(foods);

  console.log(food);

  const lenghtOfFoods = remove(foods, food).length;
  console.log(food, lenghtOfFoods);
  return (
    <div>
      <p>I'd like one {food}, please</p>
      <p>Here you go: {food}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {lenghtOfFoods} left.</p>
    </div>
  );
};

export default App;
