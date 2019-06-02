import React, { Component } from 'react'
import './Recipe.css';

export class RecipesSearch extends Component {

    render() {
        const {value,handleChange,handleSubmit} = this.props;

        return <React.Fragment>
         <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize text-light pb-3">
              <strong className="text-danger">zippyfood</strong>
            </h1>
            <form className="mt-4">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="pizza,sandwich,burger"
                  value={value}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text button-search"
                    onClick={handleSubmit}
                  >search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </React.Fragment>;
    }
}

export default RecipesSearch
