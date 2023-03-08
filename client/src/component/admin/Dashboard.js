import React from 'react'
import SideAdminbar from './Sidebar/SideAdminbar'

const Dashboard = () => {
  return (
    <>
    <div className='main-container'><SideAdminbar />
      <div className='col'><h1>Welcome to Admin-Dashboard</h1></div>
    </div>
    </>
  )
}

export default Dashboard;