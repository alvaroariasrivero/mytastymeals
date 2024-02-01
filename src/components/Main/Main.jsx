import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import './Main.css';
import MealsList from '../MealsList/MealsList';
import CategoryList from '../CategoryList/CategoryList';

const Main = () => {

  const [description, setDescription] = useState('');

  return <main>
    <Routes>
      <Route path='/' element={<MealsList setDescription={setDescription}/>}/>
      <Route path='/category' element={<CategoryList description={description}/>} />
    </Routes>
  </main>
};

export default Main;
