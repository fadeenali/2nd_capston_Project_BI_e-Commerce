import {createSlice} from "@reduxjs/toolkit"
import data from "../../components/Products/ProductData"


const ProductSlice = createSlice ({

name:'Products',
initialState:data,



})


export default ProductSlice.reducer;

