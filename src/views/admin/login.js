import React, {useState} from 'react'
import LeftSideAdmin from '../../components/admin/leftSideAdmin'
import MiddleSideAdmin from '../../components/admin/middleSideAdmin'
import RightSideAdmin from '../../components/admin/rightSideAdmin'

const Login = () => {
  const [bg, setbg] = useState(false)

  return (
    <div className={'h-screen flex absolute w-full' }>
      <LeftSideAdmin link='/dark' bgVal={bg} bgChange={setbg} />

      {bg ? <RightSideAdmin bg={bg} /> :  <RightSideAdmin bg={bg} /> }
      <MiddleSideAdmin />
    </div>
  )
}

export default Login
