import { configureStore } from "@reduxjs/toolkit";
import interestReducer from '../features/Simple-Compound/InterestSlice'

export const store = configureStore({
    reducer:{
        interest:interestReducer,
    }
})