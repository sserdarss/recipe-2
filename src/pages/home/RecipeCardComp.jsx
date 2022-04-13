import React from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { RecipeCard, RecipeHeader, RecipeImage,Button } from './HomeStyles'

const RecipeCardComp = ({recipe1}) => {
    const navigate = useNavigate();

    const moreClick =() =>{

        navigate("/details",{state:{recipe1}});
        

    }
    console.log(recipe1)
  return (
    <RecipeCard>
        <RecipeHeader>
            {recipe1.label}
        </RecipeHeader>
        <RecipeImage src={recipe1.image}/>


        <Button onClick={moreClick} >View More</Button>
            
        
    </RecipeCard>
  )
}

export default RecipeCardComp