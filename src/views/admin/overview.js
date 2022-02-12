import React from 'react'
import Header from '../../components/admin/dashboard/header'
import Menu from '../../components/admin/dashboard/menu'
import Profile from '../../components/admin/dashboard/profile'

const Overview = () => {
  return (
    <div className={'w-full h-screen flex'}>
      <div className={'basis-1/6'}>
        <Menu selected='dashboard' />
      </div>
      <div className={'h-full flex flex-col basis-5/6'}>
        <Header />
        <Profile />
      </div>
      
    </div>
  )
}

export default Overview;