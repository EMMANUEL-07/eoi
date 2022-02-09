import React, {useState} from 'react'
import LeftSide from '../../components/user/leftSide'
import MiddleSide from '../../components/user/middleSide'
import RightSide from '../../components/user/rightSide'

const Register = () => {

  const [bg, setbg] = useState(true)

  return (
    <div className={'h-screen flex absolute' }>
      <LeftSide link='/dark' bgVal={bg} bgChange={setbg} />
      {bg ? <RightSide bg={bg} /> :  <RightSide bg={bg} /> }
      <MiddleSide />
    </div>
  )
}

export default Register
