import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';




const inputData = {
    firstname: "",
    lastname: "",
    status: ""
}

const InputCamp = () => {

    const dispatch = useDispatch();  
    const [inputValue, setInputValue] = useState(inputData);

    const handleChange = ({ target: { name, value } }) => {

        setInputValue({ ...inputValue, [name]: value })

    }

    const handleSubmit = () => {

        dispatch(addContact({
            id:uuidv4(),
            firstname:inputValue.firstname,
            lastname:inputValue.lastname,
            status:inputValue.status
        }));
        
        setInputValue(inputData);



    }



    return (
        <div className=' w-2/4 h-96   bg-slate-200 mx-auto text-center text-2xl font-semibold'>
            Create Contact Screen
            <div className='flex mx-auto my-10 justify-center gap-3 text-xl font-semibold '>
                <h5 >First Name :</h5>
                <span>
                    <input
                        type='text'
                        name='firstname'
                        value={inputValue.firstname}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-60 h-10  text-center mx-auto text-base my-auto text-gray-700  focus:outline-none focus:shadow-outline' />
                </span>
            </div>
            <div className='flex mx-auto my-10 justify-center gap-3 text-xl font-semibold '>
                <h5>Last Name :</h5>
                <span>
                    <input
                        type='text'
                        name='lastname'
                        value={inputValue.lastname}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-60  h-10  text-center mx-auto my-auto text-base focus:outline-none focus:shadow-outline' />
                </span>
            </div>
            <div className='flex mx-auto my-10 justify-center gap-3 text-xl font-semibold '>
                <h5>Status :</h5>
                <input
                    type='radio'
                    name='status'
                    value="active"
                    onChange={handleChange} />Active
                <input
                    type='radio'
                    name='status'
                    value="inactive"
                    onChange={handleChange} />Inactive
            </div>

            <div className='w-32 h-10 bg-slate-500 flex  text-lg justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-slate-800 
                hover:font-semibold'>
                <button onClick={handleSubmit}>Save Contact</button>
            </div>

        </div>
    )
}

export default InputCamp