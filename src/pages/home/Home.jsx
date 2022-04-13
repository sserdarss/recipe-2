import React from 'react'
import Header from '../../components/header/Header'
import axios from 'axios';
import { useState } from 'react';
import { HomeImg, ImgDiv, MainContainer } from './HomeStyles';
import homeSvg from '../../assets/home.svg'
import RecipeCardComp from "./RecipeCardComp"

// const APP_KEY = '4373e139815707fb70516ba47a0aa0cb';
// const APP_ID = '0f712eff';
const APP_KEY = '842d0f06e5f31629f18677ac03aa20ad';
const APP_ID = '353e8676';


const Home = () => {


  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

const getData = async () => {
  if (query) {
    const result = await axios.get(url);
    setFood(result.data.hits);
   
    //sadece result ı yazdırırsak bir sürü yabancı ifade gelecek, bizim esas istediğimiz data dizisi, result ın bir alt öğesi, dataya ulaşmak için result.data
    // data nın içinde hits ve more key i var, hits =bütün dizi toplu halde json olarak, 10 tane pie mesela. data 1 den 10 a kadar göster diyor, (daha fazla varsa bile ) more =true
  } else {
    console.log("please fill the form");
  }
};


  return (
   

    <div>
      <Header setQuery={setQuery} 
      getData = {getData}
      mealTypes = {mealTypes}
      setMeal= {setMeal}
      />

      {food? (<MainContainer>

        {food.map((liste,index)=>(
          <RecipeCardComp key={index} recipe1 = {liste.recipe}/>
        ))}
         
      </MainContainer>):<ImgDiv>

      <HomeImg src= {homeSvg}/>
      
      </ImgDiv>}
      

    </div>
  )
}

export default Home