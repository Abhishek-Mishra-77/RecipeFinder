import React from 'react';
import '../RecipeContainer/RecipeContainer.css'
import { useNavigate } from 'react-router';

const RecipeList = (props) => {
    const { recipeObj } = props;
    const navigate = useNavigate();

    const recipeViewHandler = (recipe) => {
        console.log(recipe.ingredientLines[0]);
        const recipeData = {
            image: recipe.image,
            id: recipe.calories,
            label: recipe.label,
            ingredient1: recipe.ingredientLines[0],
            ingredient2: recipe.ingredientLines[1],
            ingredient3: recipe.ingredientLines[2],
        }
        localStorage.setItem('recipeObj', JSON.stringify(recipeData));
        navigate('view')
    }

    console.log(localStorage.getItem('recipeObj'))

    return (
        <div className="recipeContainer">
            <img src={recipeObj.image} alt='recipeImage' />
            <span className='text1'>{recipeObj.label}</span>
            <span className='text2'> Ingerdiernt</span>
            <span className='text3' onClick={() => recipeViewHandler(recipeObj)}> See Complete Recipe</span>
        </div>
    )
}

export default RecipeList