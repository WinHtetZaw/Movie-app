import React from 'react'
import { Outlet } from 'react-router-dom'

const TvLayout = () => {
  return (
    <div className=' min-h-screen max-w-[1280px]'>
        <Outlet/>
    </div>
  )
}

export default TvLayout