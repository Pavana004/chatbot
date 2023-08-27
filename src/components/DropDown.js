import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setAge } from '../redux/contactSlice';

const DropDown = (props) => {

    const [value, setValue] = useState();
    const dispatch = useDispatch();




    const handleSubmit = () => {

        props.actions.handleCount();
        dispatch(setAge(value));

    }


    return (
        <div className='flex justify-end m-3 p-3 gap-2 ' >
            <select
                value={value}
                className='focus:outline-0 bg-sky-600 rounded h-10 text-center text-white text-sm'
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="">Select Age</option>
                {Array.from({ length: 23 }, (_, i) => 18 + i).map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))}
            </select>
            <button
                onClick={() => handleSubmit()}
                className='bg-sky-600  hover:bg-sky-900 text-white w-24 h-10  py-2 px-2 cursor-pointer rounded text-md'>
                Click !</button>
        </div>
    )
}

export default DropDown