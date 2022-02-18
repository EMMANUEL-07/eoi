import React, {useState} from 'react'
import Dashboard from '../../components/admin/dashboard/dashboard'
import Header from '../../components/admin/dashboard/header'
import Menu from '../../components/admin/dashboard/menu'
import Profile from '../../components/admin/dashboard/profile'

const Overview = () => {

  const [bgDash, setBgDash] = useState(false)
  
  const [dataExp, setDataExp] = useState([])

  return (
    <div className={'w-full h-screen flex flex-col lg:flex-row'}>
      <div className={'lg:basis-1/6'}>
        <Menu selected='dashboard' bgDash={bgDash} />
      </div>
      <div className={'h-full flex flex-col-reverse lg:flex-col lg:basis-5/6'}>
        <Header bgDash={bgDash} setBgDash={setBgDash} sel={true}  dataExp={dataExp} />
        <Dashboard bgDash={bgDash} setDataExp={setDataExp} />
      </div>
      
    </div>
  )
}

export default Overview;