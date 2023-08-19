import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Roll",
    description: "The Classic Burger",
    price: 80,
  },
  {
    id: "m2",
    name: "Fried chicken",
    description: "Special crispy chicken.",
    price: 120,
  },
  {
    id: "m3",
    name: "Chicken Burger",
    description: "American, raw, meaty",
    price: 90,
  },
  {
    id: "m4",
    name: "Fried Rice Bowl",
    description: "Healthy...and green...",
    price: 70,
  },

  {
    id: "m5",
    name: "Momos",
    description: "Healthy and tasty",
    price: 60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
