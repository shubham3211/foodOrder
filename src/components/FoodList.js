import React from 'react'
import FoodItem from './FoodItem/FoodItem';
import foodList from '../utils/food.json';
import Grid from '@material-ui/core/Grid';

const getFoodList = () => {
  return foodList.map((food, index) => {
    return (
      <Grid item xs={6} sm={4} md={3} key={index}>
        <FoodItem food={food} />
      </Grid>
    ) 
  })
}

function FoodList() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {getFoodList()}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FoodList
