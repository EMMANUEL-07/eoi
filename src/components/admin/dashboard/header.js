import React from 'react';
import { Icon } from '@iconify/react';
import { Badge } from '@mui/material';

const Header = () => {
  return (
    <div className={'flex justify-end py-4 px-24 font-bold bg-white'}>
      <div className={'flex items-center py-1 text-lg '}>
        <Badge className={'mx-4'} badgeContent='12' color='warning' >
          <Icon icon="carbon:notification" className={'mx-1 text-xl'} />
        </Badge>
        Notifications
      </div>
    </div>
  )
}

export default Header;