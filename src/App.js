import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import FoodCard from './components/food_card';
import RecipeCard from './components/recipi_card';
import FoodList from './components/food_list';
import RecipiList from './components/recipe_list';

function App() {
  return (
    <div className="App">
      <RecipiList />
    </div>
  );
}

export default App;
