import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieLayout = () => {
  return (
    <div className=''>
        <Outlet/>
    </div>
  )
}

export default MovieLayout