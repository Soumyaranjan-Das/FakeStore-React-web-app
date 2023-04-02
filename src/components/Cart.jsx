import {
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { products } from "./Products";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./CartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  // const [cartItems, setcartItems] = useState([0]);
  // const [cartCount, setcartCount] = useState(0);
  // const [cartAmount, setcartAmount] = useState(0);
  const [cartItems,cartCount,cartAmount]=
  useSelector((state) => [
    state.store.cartItems,
    state.store.cartCount,
    state.store.cartAmount
]);

  function handleAddToCart(id) {
    console.log(cartCount);
    dispatch(addToCart(id));
  }
  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }
  
    return (
      cartCount>0 &&
      <Grid container width="50%" margin="5rem auto">
        {products.map((product) =>
        cartItems[product.id]>0 &&
             (
                <Grid xs={6} item margin={"1rem"}>
                  <Card sx={{ display: "flex" }} justifycontent={"center"}>
                    <CardMedia
                      component="img"
                      sx={{ width: 200, height: 200 }}
                      image={product.img}
                      alt="photo"
                    />
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        $ {product.price}
                      </Typography>

                      <ButtonGroup sx={{ marginTop: "3rem" }}>
                        <Button
                          variant="text"
                          id={product.id}
                          size="small"
                          onClick={(e) => handleAddToCart(product.id)}
                        >
                          <AddIcon />
                        </Button>
                        <Typography variant="h5"> {cartItems[product.id]} </Typography>
                        <Button
                          variant="text"
                          id={product.id}
                          size="small"
                          onClick={(e) => handleRemoveFromCart(product.id)}
                        >
                          <RemoveIcon />
                        </Button>
                      </ButtonGroup>
                    </CardContent>
                  </Card>
                </Grid>
              )
        )}
        <Typography vareint="h4" sx={{ width: "20rem" }}>
          Cart Totol: $ {cartAmount}
        </Typography>
      </Grid>
    );
  }
 

