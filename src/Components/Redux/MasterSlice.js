import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
     name:"string",
     initialState:{
        Data:[],
        Data2:[],
        Data3:[],
     },
     reducers:{
         ContainData: (state,formdata)=>{
             state.Data.push(formdata)
         },

         ContainData2: (state,createaccound)=>{
             state.Data2.push(createaccound)
         },

         ContainData3: (state,detail)=>{
             state.Data3.push(detail)
         },

     }
})

export const {ContainData,ContainData2,ContainData3,ContainData4} = slice.actions
export default slice.reducer;