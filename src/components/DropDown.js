import React from 'react'
import { useDispatch } from 'react-redux';
import { setAge } from '../redux/contactSlice';

const DropDown = (props) => {

    const dispatch = useDispatch();




    const handleSubmit = (event) => {

        const selectedValue = event.target.value;
        props.actions.handleCount();
        dispatch(setAge(selectedValue));

    }


    return (
        <div className='flex justify-end m-3 p-3 gap-2 ' >
            <select
                className='focus:outline-0 bg-sky-600 rounded h-10 text-center text-white text-sm'
                onChange={handleSubmit}
            >
                <option value="">Select Age</option>
                {Array.from({ length: 23 }, (_, i) => 18 + i).map((age) => (
                    <option key={age} value={age} >
                        {age}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown