import React from 'react';
import axios from 'axios';
import { useSearchParams, Link } from "react-router-dom";
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

    const saveDescription = () => {
        if(description.title && description.description){
            localStorage.setItem("description title",description.title);
            localStorage.setItem("description",description.description);
        }else{
            description.title = localStorage.getItem("description title");
            description.description = localStorage.getItem("description");
        }
    };

    saveDescription();

    return <div>
                <h2>{description.title}</h2>
                <p>{description.description}</p>
                {loading 
                ? <div>Loading...</div>
                : meals.map(meal => <Link to={`/recipe/?filter=${meal.categoryName}`} key={meal.mealId}><Card meal={meal}></Card></Link>)
                }
            </div>
};

export default CategoryList;
