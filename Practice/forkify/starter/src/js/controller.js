import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


 
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


if(module.hot){
  module.hot.accept()
}



//  Controller Function For Show Recipe
const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);
    // console.log(id); 

    if(!id) return ;
    // recipeView.renderSpinner()
       
    // 1: Loading The Recipe
    await model.loadRecipe(id);
    
    //  2: Rendering The Recipe
    recipeView.render(model.state.recipe);
    // other way instead of Render()
    // const recipeView = new recipeView(model.state.recipe)
  } catch(err){
    // console.log(err);
    recipeView.renderError(`We could not find that recipe. Please try another one!`)
  }
}

// Controller Function For Search

const controlSearchResults = async function(){
  try{
    // resultView.renderSpinner()
    
    // 1. Get Search Query
    const query = searchView.getQuery()
    // console.log(query);
    if(!query) return;
    // 2. Load Search Result
    await model.loadSearchResults(query)
    //  3. Render
    // console.log(model.state.search.results);
    resultView.render(model.state.search.results)
  } catch(err){
    resultView.renderError('No, recipes found for your query! Please Try Again...')
  }
};
controlSearchResults();

//  Initial Function
const init = function(){
  // Publisher Subscriber (pub-sub pattern)
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults)
}
init()




