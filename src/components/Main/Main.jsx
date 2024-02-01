import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './Main.css';
import MealsList from '../MealsList/MealsList';
import CategoryList from '../CategoryList/CategoryList';

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<MealsList/>}/>
      <Route path='/category' element={<CategoryList/>} />
    </Routes>
  </main>
);

export default Main;
