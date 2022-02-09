import React from 'react';
import { Link } from 'react-router-dom';
import "./Recipe.css"

const Recipe = ({recipe}) => {
    return <div>
        <div><div className="card-container">
            <div className="card u-clearfix">
                <div className="card-body">
                    <span className="card-number card-circle subtle">01</span>
                    <span className="card-author subtle">John Smith</span>
                    <h2 className="card-title">{recipe.recipe.label}</h2>
                    <span className="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
<Link to={`/recipeDetails/${recipe.recipe.uri.slice(51)}`}><div className="card-read">Read datails</div></Link>
                    <span className="card-tag card-circle subtle">C</span>
                </div>
                <img src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt className="card-media" />
            </div>
            <div className="card-shadow" />
        </div></div>;
    </div>

};

export default Recipe;
