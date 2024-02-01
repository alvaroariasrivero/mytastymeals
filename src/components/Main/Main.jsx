import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './Main.css';
import MealsList from '../MealsList/MealsList';

const Main = () => (
  <main>
    <Routes>
      <Route path='/' element={<MealsList/>}/>
    </Routes>
  </main>
);

export default Main;
