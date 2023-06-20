import React from 'react'
import { Outlet } from 'react-router-dom'

const MovieLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MovieLayout