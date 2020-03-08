import React from 'react'
import { useGetFoodContext } from '../FoodOrderContext';
import { Grid, Typography, Box } from '@material-ui/core';
import OrderListItem from './OrderListItem';

const getOrderListItems = (selectFoods)  => {
  console.log('selectFoods :', selectFoods);
  return Object.keys(selectFoods)
    .map((key) => (
      <Grid item xs={12}>
        <OrderListItem key={key} food={selectFoods[key]} />
      </Grid>)
    )
}

function OrderList() {
  let selectFoods = useGetFoodContext();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mb={2}>
          <Typography>
            <Box fontSize={22} fontWeight="fontWeightBold">
              Order Summary
            </Box>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} justify="center" style={{maxHeight: '336px', overflowY: 'scroll'}}>
          {getOrderListItems(selectFoods)}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrderList
