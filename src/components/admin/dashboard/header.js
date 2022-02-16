import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Badge } from '@mui/material';
import CsvDownload from 'react-json-to-csv'
import DummyData from './MOCK_DATA.json';
import { Tooltip } from '@mui/material';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import axios from 'axios';


const Header = ({ bgDash, setBgDash }) => {


  /* useEffect(() => {
    axios.post("https://teaminnovation-endpoint.herokuapp.com/eoi-create/", {
      email: "d@gmail.com",
      phone: "08012345678",
      city: "Anywhere in Slack",
      chanllenges: "I dinnor have sense",
      projects_details: "To work on my sense",
      career_brief: "I dinnor have any career yet. maybe soon sha",
      github_url: "http://github.com/tolu/",
      join_network: "because it's fun",
      tnc: true,
      gender: 3,
      education: 1,
      skill: 9,
      knowledge: 3
    })
      .then((response) => {
        console.log('res', response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

  }, []);
 */

  return (
    <div className={'flex justify-end  px-12 font-bold bg-white'}>

      <CsvDownload
        data={DummyData}
        filename="Selected Resources"
        className={`flex font-bold px-8 py-2  my-2 tracking-widest rounded-tr-md rounded-bl-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:cursor-pointer`}
      >
        <Icon icon="bytesize:export" className={'text-xl md:mr-4'} /> <span className={'hidden md:block'}>Export </span>
      </CsvDownload>

      <div className={'flex items-center py-3 text-lg hover:cursor-pointer'}>
        <Badge className={'mx-4'} badgeContent='12' color='warning' >
          <Icon icon="carbon:notification" className={'mx-1 text-xl'} />
        </Badge>
        Notifications
      </div>

      <Tooltip title="Change theme">
        <div onClick={() => setBgDash(!bgDash)} className={'p-4'} >
          {bgDash ? <BsMoonStarsFill size='22' className='text-dark' /> : <BsSunFill size='22' className='text-yellow-500' />}
        </div>
      </Tooltip>
    </div>
  )
}

export default Header;