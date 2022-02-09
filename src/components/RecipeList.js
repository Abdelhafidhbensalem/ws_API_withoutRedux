import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
    return <div>
{recipes.map((el,i)=><Recipe key={i} recipe={el}/>)}
    </div>;
};

export default RecipeList;
