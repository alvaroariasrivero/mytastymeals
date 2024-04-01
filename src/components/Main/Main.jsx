import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import MealsList from '../MealsList/MealsList';
import CategoryList from '../CategoryList/CategoryList';
import MealPage from '../MealPage/MealPage';

const Main = () => {

  const [description, setDescription] = useState(
    {
      title: '',
      description: ''
    }
  );

  return <main>
    <Routes>
      <Route path='/' element={<MealsList setDescription={setDescription}/>}/>
      <Route path='/category' element={<CategoryList description={description}/>} />
      <Route path='/recipe' element={<MealPage description={description}/>} />
    </Routes>
  </main>
};

export default Main;
