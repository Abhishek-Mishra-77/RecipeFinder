import React from 'react';
import RecipeList from '../RecipeList/RecipeList';

const RecipeContainer = ({ recipeList }) => {
    return (
        <div className='container recipeMain'>
            <div className="recipeListContainer">
                {recipeList.length > 0 ? recipeList.map((recipeObj) => {
                    return <RecipeList recipeObj={recipeObj.recipe} />
                }) :
                    <div class="card text-bg-info mb-3" style={{ maxWidth: '100rem' }}>
                        <div class="card-body">
                            <h5 class="card-title">Search for your favorite recipe: ✅</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default RecipeContainer;
