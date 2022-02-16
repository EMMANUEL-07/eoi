import React from 'react'
import LeftSideAdmin from '../../components/admin/login/leftSideLogin'
import MiddleSideAdmin from '../../components/admin/login/middleSideLogin'
import RightSideAdmin from '../../components/admin/login/rightSideLogin'

const Login = () => {

  return (
    <div className={`h-screen flex flex-col lg:flex-row absolute w-full`}>
      <LeftSideAdmin />
      <RightSideAdmin />
      <MiddleSideAdmin />
    </div>
  )
}

export default Login
