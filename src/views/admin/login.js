import React from 'react'
import LeftSideAdmin from '../../components/admin/leftSideAdmin'
import MiddleSideAdmin from '../../components/admin/middleSideAdmin'
import RightSideAdmin from '../../components/admin/rightSideAdmin'

const Login = () => {

  return (
    <div className={'h-screen flex absolute w-full' }>
      <LeftSideAdmin />
      <RightSideAdmin />
      <MiddleSideAdmin />
    </div>
  )
}

export default Login
