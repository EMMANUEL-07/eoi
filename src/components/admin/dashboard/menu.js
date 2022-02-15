import React from 'react';
import Logo from '../../../assets/LOGO_SEGS.png';
import Me from '../../../assets/EMMANUEL.jpg';
import { Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Menu = ({ selected, bgDash, setBgDash }) => {

  
  let menuBg = 'bg-dark'
  let hoverBg = 'hover:bg-blue-700 hover:text-white'

  let dashboard = hoverBg;
  let account = hoverBg;
  let logout = hoverBg;

  
  
  if(bgDash){
    menuBg = 'bg-lightDash text-dark font-semibold'
    hoverBg = 'hover:bg-lightDashHov hover:text-dark'
  }
  else{
    menuBg = 'bg-dark font-bold'
    hoverBg = 'hover:bg-blue-700 hover:text-white';
  }

  if (selected == 'dashboard') {
    dashboard = `${menuBg} ${hoverBg}`;
    account =  `${hoverBg}`;
    logout =  `${hoverBg}`;
  }

  if (selected == 'account') {
    account =  `${menuBg} ${hoverBg}`;
    dashboard =  `${hoverBg}`;
    logout =  `${hoverBg}`;
  }

  return (
    <div className={'bg-menu h-full py-8 text-white rounded-tr-3xl '}>
      <div className={'flex flex-col items-center'} >
        <Avatar
          alt="Profile picture"
          src={Me}
          sx={{ width: 84, height: 84 }}
        />
        <div className={'font-bold py-4 text-xl'}> Admin </div>
      </div>

      <div className={'flex flex-col items-end text-xl mr-0'}>
        <Link to='/overview' className={`my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:cursor-pointer ${dashboard}`}>
          <Icon icon="ic:round-space-dashboard" className={'mx-1'} />  Dashboard
        </Link>
        <Link to='/settings' className={`my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:cursor-pointer ${account}`}>
          <Icon icon="clarity:settings-solid" className={'mx-1'} /> Account
        </Link>

        <Link to='/login' className={`my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:cursor-pointer ${logout}`}>
          <Icon icon="ic:twotone-log-out" className={'mx-1'} /> Log Out
        </Link>
      </div>

      <Link to='/' className={'flex mx-auto w-full justify-center'}>
        <img src={Logo} alt='logo' className={'absolute bottom-8 w-52'} />
      </Link>


    </div>
  )
}

export default Menu;
