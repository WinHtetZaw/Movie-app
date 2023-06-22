import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieLayout = () => {
  return (
    <div className='px-3 sm:px-5 min-[1000px]:px-0'>
        <Outlet/>
    </div>
  )
}

export default MovieLayout