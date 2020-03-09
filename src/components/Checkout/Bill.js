import React from 'react'
import {useGetFoodContext} from '../../FoodOrderContext';
import { Grid, Typography, Divider, Box } from '@material-ui/core';

function getTotal(selectedFoods) {
  let total = 0;
  for(let key in selectedFoods){
    total+=selectedFoods[key].price*selectedFoods[key].quantity;
  }
  return total;
}

function Bill() {
  let selectedFoods = useGetFoodContext();
  console.log("Bill rendering", selectedFoods)
  let total = getTotal(selectedFoods);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography align='left' color="textSecondary">Total</Typography>
                <Typography align="right" color="textSecondary">{total}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left' color="textSecondary">Product Discount</Typography>
                <Typography align="right" color="textSecondary">{total!=0 ? 10 : 0 }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left' color="textSecondary">Delivery Charges</Typography>
                <Typography align="right" color="textSecondary">0</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left' color="textSecondary">Packing Charges</Typography>
                <Typography align="right" color="textSecondary">{total!=0 ? 15 : 0 }</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography align='left'>
                  <Box fontWeight="fontWeightBold">
                    Total Payable
                  </Box>
                </Typography>
                <Typography align="right">
                  <Box fontWeight="fontWeightBold">
                    {total!=0 ? total+25 : 0 }
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Bill
