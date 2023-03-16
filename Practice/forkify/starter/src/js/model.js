import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helpers"
export const state = {
    recipe: {},
    search: {
        query : '',
        results : [],
    },
};

//  Load Recipe
export const loadRecipe = async function(id){
    try {
        //  This getJSON should be await because getJSON return Promise.
    const data = await getJSON(`${API_URL}${id}`)

    // if(!res.ok) throw new Error(`${data.message} (${res.status})`)
    // console.log(res, data);
    const {recipe} = data.data;
    state.recipe = {
      id : recipe.id,
      title : recipe.title,
      publisher : recipe.publisher,
      sourceUrl : recipe.sourceUrl,
      image : recipe.image_url,
      servings : recipe.servings,
      cookingTime : recipe.cooking_time,
      ingredients : recipe.ingredients,
    };
    console.log(state.recipe);
}
catch (err){
    console.error();
    throw err;
    }
};

// Function For Load Search Results

export const loadSearchResults = async function(query){
    try{
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data);
        state.search.results = data.data.recipes.map(rec => {
            return {
                id : rec.id,
                title : rec.title,
                publisher : rec.publisher,
                sourceUrl : rec.sourceUrl,
                image : rec.image_url,
            }
        });
         
    }catch(err){
        throw err;
    }
}
