"use client";

import { useEffect, useState } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [mealIngredients, setMealIngredients] = useState({});
  const [selectedMealId, setSelectedMealId] = useState(null);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
    }
  };

  const fetchMealIngredients = async (idMeal) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      const ingredients = [];

      for (let i = 1; i <= 20; i++) {
        const ingredientName = data.meals[0][`strIngredient${i}`];
        if (ingredientName) {
          ingredients.push(ingredientName);
        } else {
          break;
        }
      }

      setMealIngredients((prev) => ({
        ...prev,
        [idMeal]: ingredients,
      }));
      setSelectedMealId(idMeal); // Set the selected meal ID to display ingredients
    } catch (error) {
      console.error("Error fetching meal ingredients:", error);
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals || []);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Meal Ideas for {ingredient}
      </h2>
      <div className="flex flex-wrap gap-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-slate-900 rounded-lg shadow-md p-4 w-60 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => fetchMealIngredients(meal.idMeal)}
              style={{
                border:
                  selectedMealId === meal.idMeal ? "2px solid #D97706" : "none",
              }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-md mb-2 w-full"
              />
              <p className="text-center font-bold">{meal.strMeal}</p>

              {selectedMealId === meal.idMeal &&
                mealIngredients[meal.idMeal] && (
                  <ul className="mt-3 border-t pt-2">
                    {mealIngredients[meal.idMeal].map((ing, index) => (
                      <li key={index} className="text-white text-sm">
                        {ing}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))
        ) : (
          <p>No meal ideas found for {ingredient}</p>
        )}
      </div>
    </div>
  );
}

export default MealIdeas;
