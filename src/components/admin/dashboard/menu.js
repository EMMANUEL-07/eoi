import React, { useState } from 'react';
import Logo from '../../../assets/LOGO_SEGS.png';
import Me from '../../../assets/EMMANUEL.jpg';
import { Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { Tooltip } from '@mui/material';

const Menu = ({ selected, bgDash, setBgDash }) => {

  

  let menuBg = 'bg-dark'
  let hoverBg = 'hover:bg-blue-700 hover:text-white'

  let dashboard = hoverBg;
  let account = hoverBg;
  let logout = hoverBg;

  if (bgDash) {
    menuBg = 'bg-lightDash text-dark font-semibold'
    hoverBg = 'hover:bg-lightDashHov hover:text-dark'
  }
  else {
    menuBg = 'bg-dark text-white font-bold'
    hoverBg = 'hover:bg-blue-700 hover:text-white';
  }

  if (selected == 'dashboard') {
    dashboard = `${menuBg} ${hoverBg}`;
    account = `${hoverBg}`;
    logout = `${hoverBg}`;
  }

  if (selected == 'account') {
    account = `${menuBg} ${hoverBg}`;
    dashboard = `${hoverBg}`;
    logout = `${hoverBg}`;
  }

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={'bg-menu min-h-[52px] lg:h-full  lg:py-8 text-white lg:rounded-tr-3xl '}>
      <div className={'flex-col items-center hidden lg:flex'} >
        <Avatar
          alt="Profile picture"
          src={Me}
          sx={{ width: 84, height: 84 }}
        />
        <div className={'font-bold py-4 text-xl'}> Admin </div>
      </div>

      <Drawer title="Menu" placement="left" onClose={onClose} visible={visible} className={'lg:hidden'}>
        <Link to='/overview' className={`my-2  text-xl flex items-center justify-start p-2 w-4/5  rounded-3xl hover:cursor-pointer ${dashboard}`}>
          <Icon icon="ic:round-space-dashboard" className={'mx-1'} />  Dashboard
        </Link>
        <Link to='/settings' className={`my-2  text-xl flex items-center justify-start p-2 w-4/5  rounded-3xl hover:cursor-pointer ${account}`}>
          <Icon icon="clarity:settings-solid" className={'mx-1'} /> Account
        </Link>
        <Link to='/login' className={`my-2  text-xl flex items-center justify-start p-2 w-4/5  rounded-3xl hover:cursor-pointer ${logout}`}>
          <Icon icon="ic:twotone-log-out" className={'mx-1'} /> Log Out
        </Link>
      </Drawer>

      <div className={'flex-col items-end text-xl mr-0 hidden lg:flex'}>
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

      <div className={'flex mx-auto w-full items-center justify-between py-0 lg:justify-center px-8 lg:px-0'}>

        <Tooltip title="Menu">
          <div className={'lg:hidden'} onClick={() => showDrawer()}>
            <Icon icon="ci:menu-alt-04" className={'mx-1 text-4xl text-white'} />
          </div>
        </Tooltip>
        <Link to='/' >
          <img src={Logo} alt='logo' className={'lg:absolute lg:left-1 lg:bottom-8 w-40 xl:w-52'} />
        </Link>
      </div>


    </div>
  )
}

export default Menu;
