import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Bill from './Bill';
import OrderList from './OrderList';


function Checkout() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid 
          container
          justify="space-around">
          <Grid item md={5} xs={12}>
            <Box p={2}>
              <OrderList />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box p={2}>
              <Bill />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Checkout
