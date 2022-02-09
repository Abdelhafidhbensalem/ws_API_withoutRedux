import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const getOneRecipe = async () => {
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=5ddd1284&app_key=4c4df23a3d90ef4d544f41c85c482e56`)
            //console.log(response);
            setRecipe(response.data.recipe)
        } catch (error) {
            console.dir(error);
        }
    }
    useEffect(() => {
        getOneRecipe()
    }, [])

    //null || false||1||0
    //null && false&&1&&0
    //à l'etat 0 (pas des données)


    return <div>
        <h1>{recipe.label}</h1>
        <img src={recipe.image} alt={recipe.label} />
        <ul>
            {recipe.ingredientLines && recipe.ingredientLines.map(el => <li>{el}</li>)}
        </ul>
    </div>;
};

export default RecipeDetails;
