import React from 'react'
import SidePanel from '../components/SidePanel'
import DashboardHome from '../components/DashboardHome'

const Dashboard = () => {
  return (
    <div className='flex w-full'>
        <SidePanel/>
        <DashboardHome />
    </div>
  )
}

export default Dashboard