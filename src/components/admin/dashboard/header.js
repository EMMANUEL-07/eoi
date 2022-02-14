import React from 'react';
import { Icon } from '@iconify/react';
import { Badge } from '@mui/material';
import CsvDownload from 'react-json-to-csv'
import DummyData from './MOCK_DATA.json';



const Header = () => {

  return (
    <div className={'flex justify-end py-2 px-24 font-bold bg-white'}>

      <CsvDownload
        data={DummyData}
        filename="Selected Resources"
        className={`flex font-bold px-8 pb-1 pt-2 tracking-widest rounded-tr-md rounded-bl-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:cursor-pointer`}
      >
        <Icon icon="bytesize:export" className={'text-xl mr-4'} /> Export
        </CsvDownload>

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