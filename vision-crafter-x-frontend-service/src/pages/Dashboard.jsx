import React from 'react'
import SidePanel from '../components/SidePanel'
import DashboardHome from '../components/DashboardHome'

const Dashboard = () => {
  return (
    <div className='flex w-full bg-base-200'>
        <SidePanel/>
        <DashboardHome />
    </div>
  )
}

export default Dashboard