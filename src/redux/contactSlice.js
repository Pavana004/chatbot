import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: "1", firstname: "john", lastname: "son", status: "active" },
    { id: "2", firstname: "james", lastname: "son", status: "inactive" },

]


const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        addContact : (state,action)=>{
          state.push(action.payload);
        },

        editContact : (state,action)=>{
            const {id,firstname,lastname,status} = action.payload;
            const existingContact = state.find(contact => contact.id === id);
            if(existingContact){
                existingContact.firstname = firstname;
                existingContact.lastname = lastname;
                existingContact.status = status;
            }
          },
         deleteContact : (state,action)=>{
            const {id} = action.payload;
            const existingContact = state.find(contact => contact.id === id);
            if(existingContact){
                return state.filter(con => con.id !== id);
            }
         } 
    }
});


export const {addContact,editContact,deleteContact} = contactSlice.actions
export default contactSlice.reducer