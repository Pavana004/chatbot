import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Page3 = () => {

  const { name, age } = useSelector((state) => state.contact)


  return (
    <div className='bg-slate-950 flex text-center h-screen justify-center'>
      <div className='bg-sky-600 w-96 h-96 my-auto rounded text-white my-auto font-bold text-xl'>
        <h2 className='my-20'>Your name <span className='text-slate-950 uppercase'>{name}</span> aged <span className='text-slate-950 uppercase'>{age}</span> has been added to the student system.</h2>
        <Link to="/" className="bg-slate-950 hover:bg-sky-900 text-white font-medium text-lg py-2 px-4 rounded">
          You may now exit.
        </Link>
      </div>

    </div>
  )
}

export default Page3