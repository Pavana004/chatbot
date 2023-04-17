import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className=' bg-slate-500 w-60 h-screen text-white'>
            <div className='w-60 h-20 bg-slate-700'></div>

            <div className='mx-auto py-5 ml-4 gap-10'>
                <Link to="/">
                    <div className='mx-auto px-5 mb-10 cursor-pointer hover:text-gray-900 font-bold'>Contacts</div><hr />
                </Link>
                <Link to="/mapandchart">
                    <div className='mx-auto px-5 mt-10 mb-10 cursor-pointer hover:text-gray-900 font-bold'>MapsAndChart</div><hr />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar