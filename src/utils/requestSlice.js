/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : "requestSlice" ,
    initialState : null,
    reducers :{
        addRequests : (state , action)=>{
            return action.payload;
        },
        removeRequests : (state , action)=>{
            return null;
        }
    }
});


export const {addRequests , removeRequests} = requestSlice.actions;

export default requestSlice.reducer;