import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core'
import FoodItemTop from './FoodItemTop';
import FoodItemBottom from './FoodItemBottom';
import { useSelectFoodContext } from '../../FoodOrderContext';
import './FoodItem.css'

function FoodItem(props) {
  const [quantity, setQuantity] = useState(0);
  const setSelectedFoods = useSelectFoodContext();

  useEffect(() => {
    if(quantity>=1){
      setSelectedFoods((selectedFoods) => {
        if(selectedFoods[props.food.id]){
          selectedFoods[props.food.id].quantity = quantity;
        }else{
          selectedFoods[props.food.id] = {...props.food, quantity};
        }
        return {
          ...selectedFoods
        }
      })
    }
  }, [quantity])
  return (
    <Grid container className="food-item">
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <FoodItemTop
              image={props.food.image} 
              bestseller={props.food.bestseller} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <FoodItemBottom
              name={props.food.name} 
              price={props.food.price} 
              type={props.food.type}
              calories={props.food.calories} 
              quantity={quantity}
              setQuantity={setQuantity}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FoodItem
