import React from "react";
import { products } from "./Products";
import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

export default function Shopping() {
  const dispatch = useDispatch();
  const cartCount=useSelector(state=>state.store.cartCount);
  function handleAddToCart(id) {
    console.log(cartCount);
    dispatch(addToCart(id));
  }
  console.log(cartCount);
  return (
    <Box marginTop={9}>
      <Grid
       
        container
        gap={2}
        justifyContent="center"
        marginTop="2rem"
        alignItems={"center"}
      >
        {products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "16rem" }}
                  image={product.img}
                  title={product.id + ". " + product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h5">$ {product.price}</Typography>
                  
                </CardContent>
                
              </CardActionArea>
              <Button 
              id={product.id} 
              variant='contained' 
              color="error"
               onClick={(e) => handleAddToCart(product.id)}>
                  Add to Cart <AddShoppingCart/>
                  </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
