import React from 'react'
import { Grid, Box } from '@material-ui/core'
import './FoodItemTop.css'

function FoodItemTop(props) {
  return (
    <Box borderRadius={20}>
      <Grid container>
        <Grid item xs={12} className="food-image">
          <img src={props.image} className="food" alt=""/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(FoodItemTop);