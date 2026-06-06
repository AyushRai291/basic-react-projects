import React from 'react'
import { useState , useEffect } from 'react'
import "./style.css"
import axios from "axios";
export const Meal = () => {
  const [item ,setItems] = useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
      setItems(res.data.meals);
    }).catch((err) => {
      console.log(err);
    });
  },[])

  const itemList = item.map(({strMeal,strMealThumb,idMeal}) => (
    <section className="card" key = {idMeal}>
      <img src={strMealThumb} alt="strMeal" />
      <section className='content'>
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  ));
  return (
    <div className='items-container'>{itemList}</div>
  )
}
