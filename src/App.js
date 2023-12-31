import React, { useState } from 'react';
import Header from './Header/Header';
import RecipeContainer from './RecipeContainer/RecipeContainer';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeView from './RecipeView/RecipeView';
import SavedRecipe from './SavedRecipe/SavedRecipe';

const API_KEY = '4a9761fe12c32a3c82f441cb9816ce88';
const API_ID = 'd2affa03'

function App() {

  const [recipeList, setRecipeList] = useState([])

  const fetchData = async (searched) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searched}&app_id=${API_ID}&app_key=${API_KEY}`)
    setRecipeList(response.data.hits)
  }


  return (
    <Router>
      <Header fetchData={fetchData} />
      <Routes>
        <Route path='/' element={<RecipeContainer recipeList={recipeList} />} />
        <Route path='/view' element={<RecipeView />} />
        <Route path='/saved' element={<SavedRecipe />} />
        <Route path='*' element={<RecipeContainer recipeList={recipeList} />} />
      </Routes>
    </Router>
  );
}

export default App;
