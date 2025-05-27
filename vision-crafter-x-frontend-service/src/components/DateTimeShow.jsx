import { useEffect } from 'react';
import { useState } from 'react'

const DateTimeShow = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    }, [])
  return (
    <div className='flex gap-2 justify-center items-center mt-1 text-[#FBBF24] font-semibold'>
        🕒
        <p className='text-xs'>{currentTime.toLocaleDateString()}</p>
        <p className='text-xs'>{currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateTimeShow