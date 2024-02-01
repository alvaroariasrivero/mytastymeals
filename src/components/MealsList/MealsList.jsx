import axios from "axios";
import React, {useState, useEffect} from "react";
import Card from '../Card/Card';

const MealsList = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async() => {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        const json = res.data;
        const mealCategoy = json.categories;
        console.log(mealCategoy);
        const mealsArray = mealCategoy.map(element => {
          return{
            categoryName: element.strCategory,
            categoryImg: element.strCategoryThumb
          }
        });
        setMeals(mealsArray);
      } catch (error) {
        console.log('error', error)
      }
    };
    fetchMeals(); 
  }, []);

  const paintCards = () => meals.map((meal, i)=> <Card meal={meal} key={i}/>);

  return <div>
            {paintCards()}
          </div>
}
  

export default MealsList;
