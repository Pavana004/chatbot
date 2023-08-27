import React from 'react'
import { Link } from 'react-router-dom'

const Page1 = () => {

    return (
        <div className='bg-slate-950 flex text-center h-screen justify-center'>
            <div className='bg-sky-600 w-96 h-96 my-auto rounded '>
                <h1 className='font-bold my-16 text-white text-xl'>Enter into Student Info System</h1>
                <br />
                <Link to="/chat" className="bg-slate-950 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded">
                    Enroll Now !
                </Link>
            </div>

        </div>
    )
}

export default Page1