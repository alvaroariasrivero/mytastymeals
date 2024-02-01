import React from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader';
import Card from '../Card/Card';

const listByCategory = async(categoryName) => {
    try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const json = res.data;
        const meals = json.meals.map(element => {
            return{
                categoryName: element.strMeal,
                categoryImg: element.strMealThumb,
                mealId: element.idMeal
            }
        });
        return meals
    } catch (error) {
        console.log('Error', error);
    }
}

const CategoryList = ({description}) => {

    const [searchParams] = useSearchParams();
    const { data: meals, loading } = useDataLoader(listByCategory, searchParams.get('filter'));

    return <div>
                <p className='yepa'>{description}</p>
                {loading 
                ? <div>Loading...</div>
                : meals.map(meal => <Card meal={meal} key={meal.idMeal}></Card>)
                }
            </div>
};

export default CategoryList;
