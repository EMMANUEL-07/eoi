import React from 'react';
import Logo from '../../../assets/LOGO_SEGS.png';
import Me from '../../../assets/EMMANUEL.jpg';
import { Avatar } from '@mui/material';
import { Icon } from '@iconify/react';

const Menu = ({ selected }) => {

  let dashboard = '';
  let account = '';
  let logout = '';

  if(selected == 'dashboard'){
    dashboard = 'bg-dark';
  }
  
  if(selected == 'account'){
    account = 'bg-dark';
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

      <div className={'flex flex-col items-end text-2xl font-bold mr-0'}>
        <div className={`my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:bg-blue-700 hover:cursor-pointer ${dashboard}`}>
          <Icon icon="ic:round-space-dashboard" className={'mx-1'} />  Dashboard
        </div>
        <div className={`my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:bg-blue-700 hover:cursor-pointer ${account}`}>
          <Icon icon="clarity:settings-solid" className={'mx-1'} /> Account
        </div>
        <div className={'my-2 flex items-center justify-start p-2 w-4/5  rounded-l-3xl hover:bg-blue-700 hover:cursor-pointer'}>
          <Icon icon="ic:twotone-log-out" className={'mx-1'} /> Log Out
        </div>
      </div>

      <div className={'flex mx-auto w-full justify-center'}>
        <img src={Logo} alt='logo' className={'absolute bottom-8 w-52'} />
      </div>
    </div>
  )
}

export default Menu;
