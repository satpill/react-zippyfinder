import React, { Component } from 'react'
import Recipes from './Recipes';
import RecipeSearch from './RecipesSearch';
import Spinner from '../UI/spinner/spinner';

export class RecipesList extends Component {
    render() {
        const {recipes,handleDetail,value,handleChange,handleSubmit,error} = this.props;
        
        let recipeList = <Spinner />
        if(recipes){
        recipeList = error ? <h1 className="text-danger mx-auto text-center">{error}</h1>:
                        recipes.map(recipe => {
                            return (
                                <Recipes 
                                    key={recipe.recipe_id}
                                    recipe={recipe} 
                                    handleDetail={handleDetail}
                                    />
                            )
                        })
        }

        return (
        <React.Fragment>
       <RecipeSearch  value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
         <div className="container my-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 text-center  mb-3">
                    <h1 className="text-slanted text-light">Better <span className="text-warning">Taste</span>...Better <span className="text-warning">Food</span>...</h1>
                </div>
            </div>
            <div className="row">
                {recipeList}
            </div>
         </div>
      </React.Fragment>
    );
    }
}

export default RecipesList
