import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const Count = () => {

    const [countdown, setCountdown] = useState(5);
    const history = useHistory();

    useEffect(() => {

      
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            // Redirect to Page 3 after countdown finishes
            if (countdown === 0) {
                clearInterval(timer);
                history.push('/page3');
            }

            return () => clearInterval(timer);

    }, [countdown,history])

    return (
        <div className='bg-sky-600 rounded h-14 text-center text-white mx-auto flex '>
           <p className='flex mx-auto my-auto text-md '>Bot will exit in {countdown} seconds...</p>
        </div>
    )
}

export default Count