"use client"

import {useEffect, useState} from "react";

function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try{
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            const data = await response.json();
            return data.meals;
        }catch (error){
            console.error("Error fetching meal ideas:", error)
        }
    };

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals || []);
    };

    useEffect(() =>{
        if(ingredient){
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.length > 0 ?(
                    meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} width="100"/>
                            <p>{meal.strMeal}</p>
                        </li>
                    ))
                ) : (
                    <p>No meal ideas found for {ingredient}</p>
                )}
            </ul>
        </div>
    );
}

export default MealIdeas;