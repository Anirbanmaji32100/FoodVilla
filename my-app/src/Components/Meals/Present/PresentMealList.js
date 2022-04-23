import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import MealItem from "./MealItem";
import classes from "./PresentMeal.module.css";

const AllMeals = [
  {
    id: "001",
    name: "Biryani (veg)",
    description: "The Best Biryani you can ever dream of",
    Price: "500",
  },
  {
    id: "002",
    name: "Pizza (Italian)",
    description: "The Best Pizzaaa you can ever dream of",
    Price: "950",
  },
  {
    id: "003",
    name: "Dosa (masala)",
    description: "The Best Masala Dosa you can ever dream of",
    Price: "220",
  },
  {
    id: "004",
    name: "Dosa (Cheese)",
    description: "The Best cheese Dosa you can ever dream of",
    Price: "566",
  },

];

const PresentMeals = () => {
  const MealList = AllMeals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.Price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};
export default PresentMeals;
