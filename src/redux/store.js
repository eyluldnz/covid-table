import {configureStore} from "@reduxjs/toolkit";
import covidSlice from "./covidSlice/covidSlice";

export const store=configureStore({
    reducer:{
        covid:covidSlice
    }
})