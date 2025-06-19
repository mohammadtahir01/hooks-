import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"mycounter",
    initialState:{
        counter:0
    },
    reducers:{
        Increment:(state)=>{
            state.counter=state.counter+1;
        },
        Decrement:(state)=>{
            state.counter=state.counter-1;
        }
    }
})

export const {Increment,Decrement} = counterSlice.actions;
export default counterSlice.reducer;