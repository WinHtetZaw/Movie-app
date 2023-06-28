import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieLayout = () => {
  return (
    <div className=' min-h-screen max-w-[1280px] overflow-x-hidden'>
        <Outlet/>
    </div>
  )
}

export default MovieLayout