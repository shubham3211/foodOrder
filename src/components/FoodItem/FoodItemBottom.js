import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import AddButton from '../AddButton';

function FoodItemBottom(props) {
  return (
    <Box pl={2} pr={2} mb={5} mt={2}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography noWrap>
                {props.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">
                {props.type == 'veg' ? <img src="https://static.cure.fit/assets/images/veg.svg" /> : <img src="https://static.cure.fit/assets/images/non-veg.svg" />} {props.calories} Cal
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5}>
              <Typography display="inline">
                <Box fontWeight="fontWeightBold">
                  Rs {props.price}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Grid container justify="flex-end">
                <AddButton 
                  quantity={props.quantity} 
                  setQuantity={props.setQuantity} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default React.memo(FoodItemBottom);
