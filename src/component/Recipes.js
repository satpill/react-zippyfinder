import React, { Component } from 'react';
import './Recipe.css';

export class Recipes extends Component {
    render() {
        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;
        const {handleDetail} = this.props;
        // console.log(this.props.recipe);
    return (
        <React.Fragment>
       <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
       <div className="flip-card my-3">
         <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={image_url} alt="recipe" style={{width:"300px",height:"300px"}}/>
            </div>
            <div className="flip-card-back">
                <h2>{title}</h2> 
                <p className="text-warning">{publisher}</p> 
                <button className="button text-uppercase" 
                 onClick={() => handleDetail(0, recipe_id)}>Detail</button>
            </div>
        </div>
      </div>
       </div>
        </React.Fragment>
    );
    }
}

export default Recipes;
