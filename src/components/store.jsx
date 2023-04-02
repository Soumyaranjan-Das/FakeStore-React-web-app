import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./CartSlice";

export default configureStore({
    reducer:{
        store:CartSlicer,
    }
});