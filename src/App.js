import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import FoodCard from './components/food_card';
import RecipeCard from './components/recipi_card';
import FoodList from './components/food_list';

function App() {
  return (
    <div className="App">
      <FoodList/>
    </div>
  );
}

export default App;
