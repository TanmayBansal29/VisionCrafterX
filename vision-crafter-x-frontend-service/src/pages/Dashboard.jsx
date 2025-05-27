import React from 'react'
import SidePanel from '../components/SidePanel'
import DashboardHome from '../components/DashboardHome'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex w-full bg-base-200'>
        <SidePanel/>
        <Outlet />
    </div>
  )
}

export default Dashboard