import React, { useState } from 'react'

const GotIt = (props) => {

    const [hide, setHide] = useState(true)

    const buttonAction = () => {

        props.actions.handleGotIt();
        setHide(false);
    }


    return (
        <>

            {
                hide === true ? (
                    <div
                        onClick={() => buttonAction()}
                        className='bg-sky-600  hover:bg-sky-700 text-white w-24 h-10  py-2 px-2 cursor-pointer rounded text-sm'>

                        Click! Got it

                    </div>
                ) : ""
            }




        </>
    )
}

export default GotIt