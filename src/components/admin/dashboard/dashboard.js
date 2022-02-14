import React, { useState } from 'react';
import Me from '../../../assets/EMMANUEL.jpg';
import { Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import DummyData from './MOCK_DATA.json';
import { DataGrid } from '@mui/x-data-grid';
import { Modal, Menu, Dropdown } from 'antd';

import { Card, Table } from 'antd';

const Dashboard = () => {

  const [age, setAge] = React.useState('');
  const [modalData, setModalData] = useState({})

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  

  const menu = (
    <Menu>
      <Menu.Item>
        <div className={'flex text-dark'} onClick={() => showModal()} >
          <Icon icon="carbon:view-filled" className={'mx-1 text-2xl  text-dark'} /> View
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className={'flex text-dark'}>
          <Icon icon="ant-design:edit-outlined" className={'mx-1 text-2xl  text-dark'} /> Edit
        </div>
      </Menu.Item>
      <Menu.Item className={'flex'} danger>
        <div className={'flex'}>
          <Icon icon="ic:round-delete-forever" className={'mx-1 text-2xl text-red-500'} /> Delete
        </div>
      </Menu.Item>

    </Menu>
  );

  const columns = [
    {
      headerName: 'Email',
      field: 'email',
      width: 150,
    },
    {
      headerName: 'Phone Number',
      field: 'phoneNumber',
      width: 150,
    },
    {
      headerName: 'Gender',
      field: 'gender',
      width: 150,
    },
    {
      headerName: 'Skill',
      field: 'skills',
      width: 150,
    },
    {
      headerName: 'State',
      field: 'state',
      width: 150,
    },
    {
      headerName: 'More',
      field: 'dropdown',
      width: 150,
    },
  ];

  const tableColumns = [
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text) => <div className={'bg-dark p-1 text-white'}> {text} </div>
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      render: (text) => <div className={'bg-dark p-1 text-white'}> {text} </div>
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      sorter: (a, b) => {
        const nameA = a.gender;
        const nameB = b.gender;

        console.log(nameA)

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        //names being equal
        return 0;
      },
      render: (text) => <div className={'bg-dark p-1 text-white'}> {text} </div>
    },
    {
      title: 'Skill',
      dataIndex: 'skills',
      sorter: (a, b) => {
        const nameA = a.skills;
        const nameB = b.skills;

        console.log(nameA)

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        //names being equal
        return 0;
      },
      render: (text) => <div className={'bg-dark p-1 text-white'}> {text} </div>
    },
    {
      title: 'State',
      dataIndex: 'state',
      sorter: (a, b) => {
        const nameA = a.state;
        const nameB = b.state;

        console.log(nameA)

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        //names being equal
        return 0;
      },
      render: (text) => <div className={'bg-dark p-1 text-white'}> {text} </div>
    },
    {
      title: 'More',
      dataIndex: 'dropdown',
      render: (text) =>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Icon icon="clarity:ellipsis-horizontal-line" className={'mx-1 text-2xl text-gray-600'} />
          </a>
        </Dropdown>

    },
  ];

  return (
    <div className={'flex flex-col bg-dark px-12 py-2 h-full '}>
      <div className={'py-2 flex items-center justify-center'}>
        <div className={'text-2xl text-white '}> Admin Dashboard / &nbsp; </div>
        <div className={'text-orangee'}> Expression of Interest  </div>
      </div>

      <div className={'flex  w-full items-center'}>
        <div className={'basis-1/2'}>
          <div className={'flex items-center py-1 px-8 mx-4 bg-white rounded-tl-xl rounded-br-xl'}>
            <Icon icon="akar-icons:search" className={'mx-1 text-2xl text-gray-600'} />
            <input type='text' placeholder='search' className={'w-full text-lg bg-transparent text-gray-600 border-b-2 border-white hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
        </div>
        <div className={'basis-1/2 flex justify-between pl-8'}>
          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="vaadin:date-input" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white  outline-none'}>
              <option value="" className={'text-dark bg-white '} >State</option>
              <option value="saab" className={'text-dark bg-white '} >Lagos</option>
              <option value="mercedes" className={'text-dark bg-white '} >Abuja</option>
              <option value="audi" className={'text-dark bg-white '} >Rivers</option>
            </select>
          </div>

          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="mdi:weight-lifter" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white  outline-none'}>
              <option value="" className={'text-dark bg-white '} >Skill</option>
              <option value="saab" className={'text-dark bg-white '} >Lagos</option>
              <option value="mercedes" className={'text-dark bg-white '} >Abuja</option>
              <option value="audi" className={'text-dark bg-white '} >Rivers</option>
            </select>

          </div>

          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="icon-park-outline:degree-hat" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white outline-none'}>
              <option value="" className={'text-dark bg-white '} >Education</option>
              <option value="saab" className={'text-dark bg-white '} >Lagos</option>
              <option value="mercedes" className={'text-dark bg-white '} >Abuja</option>
              <option value="audi" className={'text-dark bg-white '} >Rivers</option>
            </select>

          </div>

        </div>
      </div>

      <div className={'pt-4 text-white h-full'} >

        {/* <DataGrid
          rows={DummyData}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          getRowClassName={`bg-white`}

        /> */}


        <Table
          columns={tableColumns}
          dataSource={DummyData}
          size='small'
          className={'bg-white text-white border-2 text-2xl'}
          rowClassName={'!bg-dark text-white border-2 border-dark hover:text-dark'}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setModalData(DummyData[record.id-1])
                showModal()
              }
            };
          }}

        />

        <Modal title={modalData.fullname} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={<div className={'text-dark'}>OK</div>} className={'h-[200px]'} bodyStyle={{height: '360px', overflow: 'auto'}}>

          <div class={'text-xs'}>
            <div className={'font-semibold text-base text-center'}>Career Details</div>
            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>Skill:</span>
              <span>{modalData.skills} </span>
            </div>
            <div className={'flex items-center my-1'}>
              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Skill Proficieny:</span>
                <span>{modalData.knowlegde} </span>
              </div>

              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Education:</span>
                <span>{modalData.education} </span>
              </div>

              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Job Disclaimer:</span>
                <span> {modalData.understand ? 'YES' : 'NO'} </span>
              </div>
            </div>

            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>GitHub:</span>
              <span>{modalData.github} </span>
            </div>

            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>Projects:</span>
              <span>{modalData.projects} </span>
            </div>

            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>Most Challenging:</span>
              <span>{modalData.mostChallenge} {modalData.mostChallenge} {modalData.mostChallenge} {modalData.mostChallenge} </span>
            </div>

            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>Career Journey:</span>
              <span>{modalData.journey} </span>
            </div>

            <div className={'flex flex-col my-1'}>
              <span className={'font-medium text-sm'}>Reason:</span>
              <span>{modalData.reason} </span>
            </div>

          </div>



        </Modal>

      </div>

    </div>
  )
}

export default Dashboard;