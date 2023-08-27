import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    {
        name: '',
        age: null,
    },
   

]


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        setName : (state, action) => {
            return { ...state, name: action.payload };
        },
        setAge : (state, action) => {
            return { ...state, age: action.payload };
        },
    }
});


export const { setName,setAge} = contactSlice.actions
export default contactSlice.reducer