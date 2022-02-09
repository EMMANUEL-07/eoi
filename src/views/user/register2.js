import React from 'react'
import LeftSide from '../../components/user/leftSide'
import MiddleSide from '../../components/user/middleSide'
import RightSide from '../../components/user/rightSide'

const Register = () => {
  return (
    <div className={'h-screen flex absolute' }>
      <LeftSide link='/' />
      <RightSide bg='dark' text='white' />
      <MiddleSide />
    </div>
  )
}

export default Register
