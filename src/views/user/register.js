import React, {useState} from 'react';
import LeftSide from '../../components/user/leftSide'
import MiddleSide from '../../components/user/middleSide'
import RightSide from '../../components/user/rightSide'

const Register = () => {

  const [pd, setpd] = useState(1)

  let reverse = 'lg:flex-row-reverse'

  return (
    <div className={`h-screen flex flex-col lg:flex-row absolute w-full ${pd == 5 ? reverse : ''}`}>
      <LeftSide pd={pd} />
      <MiddleSide pd={pd} />
      <RightSide pd={pd} setpd={setpd} /> 
      
    </div>
  )
}

export default Register
