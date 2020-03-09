import React, { useState, useEffect } from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import AddButton from '../../AddButton';
import { useSelectFoodContext } from '../../../FoodOrderContext';

function OrderListItem({food}) {
  const [quantity, setQuantity] = useState(food.quantity);
  const setSelectedFoods = useSelectFoodContext();
  useEffect(() => {
    if(quantity>=1){
      setSelectedFoods((selectedFoods) => {
        if(selectedFoods[food.id]){
          selectedFoods[food.id].quantity = quantity;
        }else{
          selectedFoods[food.id] = {...food, quantity};
        }
        return {
          ...selectedFoods
        }
      })
    }
    if(quantity==0){
      setSelectedFoods((selectedFoods) => {
        if(selectedFoods[food.id]){
          delete selectedFoods[food.id];
          return {
            ...selectedFoods
          }
        }
      })
    }
  }, [quantity])
  return (
    <Grid conatainer>
      <Grid item xs={12} >
        <Grid container style={{height: '80px'}} spacing={2}>
          <Grid style={{height: '100%', width: '80px'}}>
            <img src={food.image} style={{height: '100%', width: '100%'}} alt=""/>
          </Grid>
          <Grid item xs={8} style={{padding: '0px'}}>
            <Box pl={2}>
              <Typography variant="subtitle1" color="textSecondary" noWrap>
                {food.name}
              </Typography>
              <Typography variant="subtitle2">
                Rs {food.price * quantity}
              </Typography>
              <AddButton 
                quantity={quantity}
                setQuantity={setQuantity} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default OrderListItem
