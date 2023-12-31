import React from 'react';
import './SavedRecipe.css';

const SavedRecipe = () => {
    const savedRecipe = JSON.parse(localStorage.getItem('saveRecipe'));
    return (
        <div className='container mt-5'>
            {savedRecipe ? savedRecipe.map((recipe) =>
                <div class="card text-bg-info mb-3" >
                    <div class="card-body savedRecipe">
                        <img src={recipe.image} class="card-img-top" alt="recipe" />
                        <h5 class="card-title">{recipe.label} ✅</h5>
                        <h5 class="card-title">{recipe.ingredient2}</h5>
                    </div>
                </div>
            ) :
                <div class="card text-bg-info mb-3" style={{ maxWidth: '100rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">Cannot Find Saved Recipes: ✅</h5>
                    </div>
                </div>
            }
        </div>
    )
}

export default SavedRecipe