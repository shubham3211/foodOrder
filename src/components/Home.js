import React, {useState} from 'react'
import FoodList from './FoodList';
import { Grid } from '@material-ui/core';

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FoodList />  
      </Grid>
    </Grid>
  )
}

export default Home
