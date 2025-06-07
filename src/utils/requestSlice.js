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
            const newArray = state.filter(r => r.fromUserId._id !==  action.payload);
            return newArray;
        },
        deleteRequests:(state , payload)=>{
            return null;
        }
    }
});


export const {addRequests , removeRequests,deleteRequests} = requestSlice.actions;

export default requestSlice.reducer;