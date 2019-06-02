import React, { Component } from 'react'
import {recipe} from '../tempDetails';
import Spinner from '../UI/spinner/spinner';
import './Recipe.css';
export class RecipesDetails extends Component {

state={
    recipe:null
}
async componentDidMount(){
    const id = this.props.id;
    const url=`https://cors-anywhere.herokuapp.com/www.food2fork.com/api/get?key=fb63426b87953885cce8207f88a36cf5&rId=${id}`;
            try{
                    const data = await fetch(url);
                    const jsonData = await data.json();
                    this.setState((state,props) => {
                      return {recipe: jsonData.recipe
                    };
                }, ()=>{});
                  }catch(error){
                    console.log(error);
                  }
                }

      
    render() {
      
        const{handleIndex} = this.props
        let recipeList = <Spinner/>
        if(this.state.recipe){
        recipeList = <div className="container">
             <div className="row">
             <div className="col-3 mt-2 arrow-left ">
                    <span className="arrow text-capatalize" onClick={() => handleIndex(1)}>
                    <i className="fas fa-arrow-left">{"  "} Back</i>
                    </span>
                </div>

                <div className="col-6 my-5">
                    <h6 className="text-center text-slanted title mt-3 text-danger">{this.state.recipe.title}</h6>
                    <h6 className="text-light text-center text-capitalize text-slanted">provided by {this.state.recipe.publisher}</h6>
                </div>
             </div>
            

            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 mt-5">
                    
                    <img src={this.state.recipe.image_url} className="d-block w-100" alt="recipe"/>
                </div>

                <div className="col-10 mx-auto col-md-6 my-2 mt-4">
                    <ul className="list-group">
                      <h2 className="mb-4 text-light text-slanted">Ingredients</h2>
                      {
                          this.state.recipe.ingredients.map((item,index) => {
                              return (
                              <li key={index} className=" box text-light text-slanted">
                                {item}
                              </li>
                          );
                         })
                      }
                    </ul>

                    <a href={this.state.recipe.publisher_url} target="_blank" rel="noopener noreferrer"  className="btn btn-primary text-capitalize mt-3">
                        Publisher 
                    </a>
                    <a href={this.state.recipe.source_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mx-3 mt-3 text-capitalize">
                        Go to recipe
                    </a>
                </div>
            </div>
        </div>
        }
        return (
        <React.Fragment>
           {recipeList}
        </React.Fragment>
    );
    }
}

export default RecipesDetails
