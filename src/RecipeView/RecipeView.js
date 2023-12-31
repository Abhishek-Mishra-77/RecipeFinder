import React, { Fragment, useState } from 'react';
import './RecipeView.css';

const RecipeView = () => {
    const [saveRecipe, setSaveRecipe] = useState(JSON.parse(localStorage.getItem('saveRecipe')) || []);
    const recipeData = JSON.parse(localStorage.getItem('recipeObj'));
    
    const saveRecipeHandler = (recipe) => {
        const existingRecipe = saveRecipe.find((data) => data.id === recipe.id);
        if (!existingRecipe) {
            setSaveRecipe((saveRecipe) => {
                const newRecipe = [...saveRecipe, recipe];
                localStorage.setItem('saveRecipe', JSON.stringify(newRecipe));
                return newRecipe;
            })
        }
    }

    return (
        <Fragment>
            {recipeData ? <div className='container main-viewPage mt-4'>
                <div className='left-view-main'>
                    <div className='card container left-view'>
                        <div className='left-some-image'>
                            <img src={recipeData.image} className="card-img-top" alt="..." />
                            <img src={recipeData.image} className="card-img-top" alt="..." />
                            <img src={recipeData.image} className="card-img-top" alt="..." />
                            <img src={recipeData.image} className="card-img-top" alt="..." />
                        </div>
                        <img src={recipeData.image} alt="recipeImage" />
                    </div>
                    <button onClick={() => saveRecipeHandler(recipeData)} type="button" className="btn btn-info mt-3">Save Recipe</button>
                </div>
                <div className="card container  text-bg-info right-view">
                    <h2 className="card-title">{recipeData.label}</h2>
                    <div className="card-body text-success">
                        <h2 className="card-title">IngredientLines</h2>
                        <p>1. {recipeData.ingredient1}</p>
                        <p>2. {recipeData.ingredient2}</p>
                        <p>3. {recipeData.ingredient3}</p>
                        <p className="card-text">Food is a universal language that transcends cultural boundaries, offering a shared experience that unites people around the globe. Whether savoring familiar flavors or embracing the excitement of new culinary discoveries, the joy of a delicious meal is a universally cherished aspect of the human experience. In its diverse forms and preparations, food serves as a common thread, weaving connections that celebrate the richness of our shared gastronomic heritage</p>
                    </div>
                </div>
            </div> : <div class="card container text-bg-info mb-3 mt-3" style={{ maxWidth: '100rem' }}>
                <div class="card-body">
                    <h5 class="card-title">No Recipe Found:❗</h5>
                </div>
            </div>}
        </Fragment>
    )
}

export default RecipeView