import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import DummyData from './MOCK_DATA.json';
import { Modal, Menu, Dropdown } from 'antd';
import { Table } from 'antd';
import axios from 'axios';

const Dashboard = ({ bgDash }) => {

  let change = 'bg-dark text-white'

  if (bgDash) {
    change = 'bg-lightDash text-dark'
  }
  else {
    change = 'bg-dark text-white'
  }

  const [states, setState] = useState('');
  const [education, setEducation] = useState('');
  const [skill, setSkill] = useState('');
  const [modalData, setModalData] = useState({})
  const [resources, setResources] = useState(DummyData)
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

  const stateData = ["Lagos", "Abuja", "Rivers", "Oyo", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Plateau", "Sokoto", "Taraba", "Yobe", "Zamfara"]

  const educationData = ["SSCE", "OND", "HND", "BSC", "MSC"]

  const skillsData = [["Frontend", "Front end development"], ["UI/UX", "UI/UX design"], ["Backend", "Back end development"], ["DevOps", "DevOps"], ["QA Testing", "QA testing"], ["Data Science", "Data Science"], ["Mobile Development", "Mobile application development"], ["Product Manager", "Technical Product Management - SCRUM MASTER"], ["Others", "Others"]]

  /* const [dataT, setData] = useState([])

  useEffect(() => {
    axios("https://teaminnovation-endpoint.herokuapp.com/eoi-list/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

      
  }, []); */

  // console.log(dataT);
  
  const filterState = (data) => {
    if (states == '') {
      return data
    }
    return data.filter(e => e.state === states)
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
    const filtered = filteredData(DummyData)
    setResources(filtered)
    console.log('filter', filtered)
  }, [DummyData, states, skill, education])

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
      render: (text) => <div className={`${change} p-1`}> {text} </div>
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
      render: (text) => <div className={`${change} p-1`}> {text} </div>
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
    <div className={`flex flex-col ${change} px-12 py-2 h-full`}>
      <div className={'py-4 flex items-center justify-center'}>
        <div className={'text-2xl '}> Admin Dashboard / &nbsp; </div>
        <div className={'text-orangee'}> Expression of Interest  </div>
      </div>

      <div className={'flex py-4 w-full items-center'}>
        <div className={'basis-1/2'}>
          <div className={'flex items-center py-1 px-8 mx-4 bg-white rounded-tl-xl rounded-br-xl'}>
            <Icon icon="akar-icons:search" className={'mx-1 text-2xl text-gray-600'} />
            <input type='text' placeholder='search' className={'w-full text-lg bg-transparent text-gray-600 border-b-2 border-white hover:border-blue-500 focus:border-blue-500 outline-none'} />
          </div>
        </div>
        <div className={'basis-1/2 flex justify-between pl-8'}>
          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="vaadin:date-input" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white  outline-none'} onChange={(e) => handleState(e)}>
              <option value="" className={'text-dark bg-white '} >State</option>
              {stateData.map(e => <option value={e} className={'text-dark bg-white '} >{e}</option>)}
            </select>
          </div>



          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="icon-park-outline:degree-hat" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white outline-none'} onChange={(e) => handleEducation(e)}>
              <option value="" className={'text-dark bg-white '} >Education</option>
              {educationData.map(e => <option value={e} className={'text-dark bg-white '} >{e}</option>)}
            </select>

          </div>

          <div className={'flex items-center bg-orangee px-3 py-2 rounded-tr-lg rounded-bl-lg'}>
            <Icon icon="mdi:weight-lifter" className={'mx-1 text-xl text-white'} />
            <select className={'bg-transparent text-white  outline-none'} onChange={(e) => handleSkill(e)}>
              <option value="" className={'text-dark bg-white '} >Skill</option>
              {skillsData.map(e => <option value={e[1]} className={'text-dark bg-white '} >{e[0]}</option>)}
            </select>

          </div>

        </div>
      </div>

      <div className={'pt-4 text-white h-full'} >

        <Table
          columns={tableColumns}
          dataSource={resources}
          size='small'
          className={'bg-white text-white border-2 text-2xl'}
          rowClassName={`${change}`}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setModalData(DummyData[record.id - 1])
                showModal()
              }
            };
          }}
          pagination={{ simple: true, defaultPageSize: 8 }}
        />

        <Modal title={modalData.email} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={<div className={'text-dark'}>OK</div>} bodyStyle={{ height: '400px', overflow: 'auto', background: '#14147A', color: '#fff' }} closable cancelButtonProps={{ style: { display: 'none' } }}>

          <div class={'text-xs'}>
            <div className={'font-semibold text-base text-center'}>Career Details</div>
            <div className={'flex flex-col my-2'}>
              <span className={'font-medium text-sm'}>Skill:</span>
              <span>{modalData.skill} </span>
            </div>
            <div className={'flex items-center my-2'}>
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
              <span>{modalData.challenges} {modalData.challenges} {modalData.challenges} {modalData.challenges} </span>
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
