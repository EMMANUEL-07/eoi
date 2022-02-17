import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import DummyData from './MOCK_DATA.json';
import { Modal, Menu, Dropdown } from 'antd';
import { Table } from 'antd';
import axios from 'axios';
import  {skillA, skillData, educationA, educationData, knowledgeA, stateData, genderA, getText } from './constants'

const Dashboard = ({ bgDash }) => {

  let change = 'bg-dark text-white'
  let modalBg = '#14147A'
  let modalCol = '#14147A'
  let bgCard = 'bg-darkCard'
  let cardText = 'text-white'


  if (bgDash) {
    change = 'bg-lightDash text-dark'
    modalBg = '#EDF1F7'
    modalCol = '#14147A'
    bgCard = 'bg-white'
    cardText = 'text-dark'
  }
  else {
    change = 'bg-dark text-white'
    modalBg = '#14147A'
    modalCol = '#FFF'
    bgCard = 'bg-darkCard'
    cardText = 'text-white'
  }

  const [states, setState] = useState('');
  const [education, setEducation] = useState('');
  const [skill, setSkill] = useState('');
  const [modalData, setModalData] = useState({})
  const [dataT, setData] = useState([])
  const [resources, setResources] = useState([])
  

  const handleState = (event) => {
    setState(event.target.value);
  };

  const handleEducation = (event) => {
    setEducation(event.target.value);
  };

  const handleSkill = (event) => {
    setSkill(event.target.value);
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

  

  useEffect(() => {
    axios("https://teaminnovation-endpoint.herokuapp.com/eoi-list/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

      
  }, []);

  console.log(dataT);


  
  const filterState = (data) => {
    if (states == '') {
      return data
    }
    return data.filter(e => e.city === states)
  }
  const filterEducation = (data) => {
    if (education == '') {
      return data;
    };
    return data.filter(e => e.education === education);
  }

  const filterSkill = (data) => {
    if (skill == '') {
      return data
    }
    return data.filter(e => e.skill === skill)
  }


  const filteredData = (data) => {
    const filteredStates = filterState(data);
    const filteredEducation = filterEducation(filteredStates);
    const filteredSkill = filterSkill(filteredEducation);

    return filteredSkill
  }

  useEffect(() => {
    const filtered = filteredData(dataT)
    setResources(filtered)
    console.log('filter', filtered)
  }, [dataT, states, skill, education])


  

  const menu = (<Menu>
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

  const tableColumns = [
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text) => <div className={`${change} p-1`}> {text} </div>
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      render: (text) => <div className={`${change} p-1`}> {text} </div>
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
      render: (text) => <div className={`${change} p-1`}> {getText(text, genderA)} </div>
    },
    {
      title: 'Skill',
      dataIndex: 'skill',
      sorter: (a, b) => {
        const nameA = a.skill;
        const nameB = b.skill;

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
      render: (text) => <div className={`${change} p-1`}> {getText(text, skillA)}  </div>
    },
    {
      title: 'State',
      dataIndex: 'city',
      sorter: (a, b) => {
        const nameA = a.city;
        const nameB = b.city;

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
      render: (text) => <div className={`${change} p-1`}> {text} </div>
    },
    {
      title: '',
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
    <div className={`flex flex-col ${change} px-6 lg:px-12 py-4 lg:py-2 h-full overflow-auto`}>
      <div className={'py-4 flex items-center justify-center'}>
        <div className={'text-sm sm:text-xl  lg:text-2xl'}> Admin Dashboard / &nbsp; </div>
        <div className={'text-xs sm:text-base text-orangee '}> Expression of Interest  </div>
      </div>

      <div className={'flex flex-col xl:flex-row py-4 w-full xl:items-center'}>
        <div className={'lg:basis-2/5 lg:mb-3 xl:my-0 w-3/4 self-end'}>
          <div className={'flex items-center py-1 px-4 lg:px-8 mx-2 lg:mx-4 bg-white rounded-tl-xl rounded-br-xl'}>
            <Icon icon="akar-icons:search" className={'mx-1 text-2xl text-gray-600'} />
            <input type='text' placeholder='search' className={'w-full text-lg bg-transparent text-gray-600 border-b-2 border-white hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
        </div>

        <div className={'basis-3/5 w-full flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between pl-0 lg:pl-8 pt-4 lg:pt-0'}>
          
          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="vaadin:date-input" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white w-full  outline-none'} onChange={(e) => handleState(e)}>
              <option value="" className={'text-dark bg-white '} >State</option>
              {stateData.map(e => <option value={e} className={'text-dark bg-white '} >{e}</option>)}
            </select>
          </div>



          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="icon-park-outline:degree-hat" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white outline-none  w-full'} onChange={(e) => handleEducation(e)}>
              <option value="" className={'text-dark bg-white '} >Education</option>
              {educationData.map(e => <option value={e} className={'text-dark bg-white '} >{e}</option>)}
            </select>

          </div>

          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="mdi:weight-lifter" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white  outline-none  w-full'} onChange={(e) => handleSkill(e)}>
              <option value="" className={'text-dark bg-white '} >Skill</option>
              {skillData.map(e => <option value={e[1]} className={'text-dark bg-white '} >{e[0]}</option>)}
            </select>

          </div>

        </div>
      </div>

      <div className={'pt-4 lg:bg-white text-white lg:border-2 border-white '} >

        <Table
          columns={tableColumns}  
          rowKey="id"
          dataSource={resources}
          size='small'
          className={'bg-white text-white border-2 border-gray-500 text-2xl hidden lg:contents '}
          rowClassName={`${change}`}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setModalData(resources[record.id - 1])
                showModal()
              }
            };
          }}
          pagination={{ simple: true, defaultPageSize: 8 }}
        />


        <div className={`h-full lg:hidden flex flex-col overflow-auto`}>
          {resources.map(e => (
            <div className={`flex flex-col my-2 border-2 border-darkCard ${cardText}`}>
              <div className={`w-full ${bgCard} text-dark px-2`}>
                <div className={'flex justify-between py-1 space-x-4'}>
                  <div className={'font-semibold'}>{e.email}</div>
                  <div>{e.gender}</div>
                </div>
                <div className={'flex justify-between space-x-4'}>
                  <div>{e.city}</div>
                  <div>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Icon icon="clarity:ellipsis-horizontal-line" className={'mx-1 text-2xl text-gray-600'} />
                      </a>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className={'flex justify-between px-2 py-1 space-x-4'}>
                <div>Skill</div>
                <div className={'font-medium'}>{e.skill}</div>
              </div>

              <div className={'flex justify-between px-2 py-1 space-x-4'}>
                <div>Phone Number</div>
                <div className={'font-medium'}>{e.phone}</div>
              </div>
            </div>)
          )
          }
        </div>






        <Modal title={modalData.fullname} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={<div className={'text-dark'}>OK</div>} bodyStyle={{ height: '400px', overflow: 'auto', background: modalBg, color: modalCol }} closable cancelButtonProps={{ style: { display: 'none' } }}>

          <div class={'text-xs'}>
            <div className={'font-semibold text-base text-center'}>Career Details</div>
            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Skill:</span>
              <span>{getText( modalData.skill , skillA) } </span>
            </div>
            <div className={'flex items-center my-2'}>
              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Skill Proficieny:</span>
                <span>{ getText( modalData.knowledge , knowledgeA)} </span>
              </div>

              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Education:</span>
                <span>{ getText( modalData.education , educationA)} </span>
              </div>

              <div className={'basis-1/3 flex flex-col'}>
                <span className={'font-medium text-sm'}>Job Disclaimer:</span>
                <span> {modalData.tnc ? 'YES' : 'NO'} </span>
              </div>
            </div>

            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>GitHub:</span>
              <span>{modalData.github_url} </span>
            </div>

            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Projects:</span>
              <span>{modalData.projects_details} </span>
            </div>

            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Most Challenging:</span>
              <span>{modalData.chanllenges} {modalData.chanllenges} {modalData.challenges} {modalData.challenges} </span>
            </div>

            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Career Journey:</span>
              <span>{modalData.career_brief} </span>
            </div>

            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Reason:</span>
              <span>{modalData.join_network} </span>
            </div>

          </div>



        </Modal>

      </div>

    </div>
  )
}

export default Dashboard;
