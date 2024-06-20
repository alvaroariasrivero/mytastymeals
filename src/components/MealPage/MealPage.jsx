import React from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader';

const mealByName = async(mealName) => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
        const json = res.data;
        const meal = json.meals[0];
        const recipe = Object.fromEntries(
            Object.entries(meal).filter(([_, value]) => value !== null && value !== undefined && value !== " " && value.length !== 0)
        );
        const recipeCopy = { ...recipe };
        const ingredients = [];
        let i = 1;
        while (recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push({ ingredient, measure });
            }
            delete recipeCopy[`strIngredient${i}`];
            delete recipeCopy[`strMeasure${i}`];
            i++;
        }
        recipeCopy.ingredients = ingredients;
        console.log(recipeCopy);
        return recipeCopy
    } catch (error) {
        console.log('Error', error);
    }
}

const MealPage = () => {

    const [searchParams] = useSearchParams();
    const { data: recipeCopy, loading } = useDataLoader(mealByName, searchParams.get('filter'));

    const paintIngredients = () => recipeCopy.ingredients.map((ingredient, i) => <li key={i}>{ingredient.ingredient} - {ingredient.measure}</li>)

    return <>
            {loading 
                ? <div>Loading...</div>
                : <div>
                    <h1>{recipeCopy.strMeal}</h1>
                    <img src={recipeCopy.strMealThumb} alt={recipeCopy.strMeal} />
                    <h4>Ingredients:</h4>
                    <ul>
                        {paintIngredients()}
                    </ul>
                </div>
                }
            </>
};

export default MealPage;