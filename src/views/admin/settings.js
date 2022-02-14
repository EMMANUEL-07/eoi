import React, {useState} from 'react'
import Header from '../../components/admin/dashboard/header'
import Menu from '../../components/admin/dashboard/menu'
import Profile from '../../components/admin/dashboard/profile'

const Settings = () => {

  const [bgDash, setBgDash] = useState(false)

  return (
    <div className={'w-full h-screen flex'}>
      <div className={'basis-1/6'}>
        <Menu selected='account'  bgDash={bgDash} />
      </div>
      <div className={'h-full flex flex-col basis-5/6'}>
      <Header bgDash={bgDash} setBgDash={setBgDash} />
        <Profile  bgDash={bgDash} />
      </div>
      
    </div>
  )
}

export default Settings
