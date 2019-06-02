import React, {Component} from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipesList from './component/RecipesList';
import RecipesDetail from './component/RecipesDetails';
export class App extends Component {
    state = {
      recipes: null,
      url:"https://cors-anywhere.herokuapp.com/www.food2fork.com/api/search?key=5abf73cca421be4b680ef1e001493ced",
      base_url:"https://cors-anywhere.herokuapp.com/www.food2fork.com/api/search?key=5abf73cca421be4b680ef1e001493ced",
      detail_id: 35382,
      pageindex:1,
      search: "",
      query:"&q=",
      error:"",
      limit:false
    };

      async getrecipe() {
        try{
          const data = await fetch(this.state.url);
          const jsonData = await data.json();
          if(jsonData.recipes.length === 0){
             this.setState(() => {
                return {error:"sorry,it is not available"}
             })
          }else{
            this.setState(() => {
              return {recipes: jsonData.recipes};
            })
          }
          
        }catch(error){
          if(error){ this.setState(() => {
            return {limit: true}
          })}
        }
      }

      componentDidMount(){
        this.getrecipe();
      }

      displayPage = (index => {
        switch(index){
          default:
            case 1:
               return (<RecipesList recipes={this.state.recipes} handleDetail={this.handleDetail}
                       value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} limit={this.state.limit}/>)
            case 0:
              return (<RecipesDetail id={this.state.detail_id} handleIndex={this.handleIndex}/>)
        }
      })

      handleIndex = index => {
        this.setState({
          pageindex:index
        })
      }

      handleDetail = (index,id) => {
        this.setState({
          pageindex:index,
          detail_id:id
        })
      }

      handleChange = (e) => {
        this.setState({
          search:e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const{base_url,query,search} = this.state;
        this.setState(() => {
          return {url:`${base_url}${query}${search}`,search:"",error:"",recipes:null};
        }, () => {
          this.getrecipe();
        })
      }

  render(){
    
    return (
    <React.Fragment>
       {this.displayPage(this.state.pageindex)}
    </React.Fragment>
    );
  }
}

export default App;
