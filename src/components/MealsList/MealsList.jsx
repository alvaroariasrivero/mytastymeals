import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Card from '../Card/Card';

const MealsList = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() => {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const json = res.data;
        const mealCategoy = json.categories;
        const mealsArray = mealCategoy.map(element => {
          return{
            categoryName: element.strCategory,
            categoryImg: element.strCategoryThumb,
            categoryDescription: element.strCategoryDescription
          }
        });
        setMeals(mealsArray);
      } catch (error) {
        console.log('error', error)
      }
    };
    fetchMeals(); 
  }, []);

  const getDescription = (str) => console.log(str)

  const paintCards = () => meals.map((meal, i)=> <Link to={`/category/?filter=${meal.categoryName}`} key={i}><Card meal={meal} getDescription={()=>getDescription(meal.categoryDescription)}/></Link>);

  return <div>
            {paintCards()}
          </div>
}
  

export default MealsList;
