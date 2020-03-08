import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'

function AddButton({quantity, setQuantity}) {
  return (
    <Grid 
      container 
      style={{
        color: '#60b246', 
        maxHeight: '28px', 
        width: '81px', 
        border: '1px solid #d4d5d9',
        cursor: 'pointer',
        lineHeight: '30px',}}>
      <Grid item xs={12}>
        {quantity==0? 
          <Grid container onClick={() => setQuantity((total) => {console.log(total); return total+1})}>
            <Grid item xs={12}>
              <Typography align="center">
                <Box lineHeight={1.7}>
                  Add
                </Box>
              </Typography>
            </Grid>
          </Grid>:
          <Grid container spacing={2}>
            <Grid item xs={4} style={{color: '#282c3f'}} onClick={() => setQuantity((total) => total-1)}>
              <Typography align="center">
                <Box lineHeight={1.7}>
                  -
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography align="center">
                <Box lineHeight={1.7}>
                  {quantity}
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={4} onClick={() => setQuantity((total) => total+1)}>
              <Typography align="center">
                <Box lineHeight={1.7}>
                  +
                </Box>
              </Typography>
            </Grid>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}

export default React.memo(AddButton);
