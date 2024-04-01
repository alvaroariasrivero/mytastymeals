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
        console.log(recipe);
        return recipe
    } catch (error) {
        console.log('Error', error);
    }
}

const MealPage = ({description}) => {

    const [searchParams] = useSearchParams();
    const { data: recipe, loading } = useDataLoader(mealByName, searchParams.get('filter'));

    return <div>
            <p>Yolo</p>
            </div>
};

export default MealPage;