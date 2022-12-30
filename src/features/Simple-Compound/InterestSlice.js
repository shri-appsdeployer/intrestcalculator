import { createSlice } from "@reduxjs/toolkit";

const interestSlice = createSlice({
    name:'interest',
    initialState:{
        SI:[],
        CI:[],
        type:'SI',
        rangeForSI:[],
        rangeForCI:[],
    },
    reducers:{
        addToSI:(state,action)=>{
            state.SI.push(action.payload)
        },
        addToCI:(state,action)=>{
            state.CI.push(action.payload)
        },
        setType:(state,action)=>{
            state.type = action.payload;
        },
        setRangeForCI:(state,action)=>{
            for(let i=0;i<=action.payload;i++){
                state.rangeForCI.push(i);
            }
        },
        setRangeForSI:(state,action)=>{
            for(let i=0;i<=action.payload;i++){
                state.rangeForSI.push(i);
            }
        }
    }
})

export const {addToSI,addToCI,setType,setRangeForCI,setRangeForSI} = interestSlice.actions;

export const getSI = (state)=> state.interest.SI;
export const getCI = (state)=> state.interest.CI;
export const getType = (state)=> state.interest.type;
export const getRangeCI= (state)=> state.interest.rangeForCI;
export const getRangeSI= (state)=> state.interest.rangeForSI;


export default interestSlice.reducer;