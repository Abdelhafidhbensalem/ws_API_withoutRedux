import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
const [input, setInput] = useState("")
const [query, setQuery] = useState("")

  const getAllRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=5ddd1284&app_key=4c4df23a3d90ef4d544f41c85c482e56&cuisineType=Middle%20Eastern`)
      //console.log(response.data);
      setRecipes(response.data.hits)
      setLoading(false)
    } catch (error) {
      console.dir(error);
    }
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  setQuery(input)
}
  useEffect(() => {
    getAllRecipes()
    return () => {
    };
  }, [query]);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={loading?<h1>loading ...</h1>:<div><form onSubmit={handleSubmit}><input type="text" onChange={(e)=>setInput(e.target.value)}/></form><RecipeList recipes={recipes} /></div>}/>
        <Route path="/recipeDetails/:id" element={<RecipeDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
