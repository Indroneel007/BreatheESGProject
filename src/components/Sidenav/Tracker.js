import React, {useState} from 'react'
import {Button, Layout, theme, Anchor, Menu, Dropdown, Table} from 'antd'
import {BellOutlined} from '@ant-design/icons'
import {MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined} from '@ant-design/icons'
import './Tracker.scss'
import Logo from './Logo/Logo';
import MenuList from './MenuList/MenuList';
import Slicer from "../../images/Slicer.svg"
import Avatar from '../../images/Avatar.svg'
import DataEntry from '../../images/DataEntry.svg'
import Tracker from '../../images/Tracker.svg'
import PendingTracker from '../../images/PendingTracker.svg'
import PendingReviews from '../../images/PendingReviews.svg'
import PendingApproval from '../../images/PendingApproval.svg'
import ApprovedTwo from '../../images/ApprovedTwo.svg'
import Incomplete from '../../images/Incomplete.svg'

const columns = [
  {
    title: 'MONTH',
    dataIndex:'month'
  },
  {
    title: 'STATUS',
    dataIndex: 'status'
  },
  {
    title: 'COMPLETION',
    dataIndex:'completion'
  },
  {
    title: 'BUSINESS UNIT',
    dataIndex: 'business'
  }
]

const data = [
  {
    month:'Jan 2023',
    status:<img src={PendingApproval} alt="pendingapproval" />,
    completion:'20%',
    business:'Business Unit 1'
  },
  {
    month:'Feb 2023',
    status:<img src={ApprovedTwo} alt="approvedtwo"/>,
    completion:'30%',
    business:'Business Unit 1'
  },
  {
    month:'Mar 2023',
    status:<img src={Incomplete} alt="incomplete" />,
    completion:'50%',
    business:'Business Unit 1'
  }
]

const {Header, Sider, Content} = Layout;
const TrackerPage = () => {

  return (
    <Layout>
        <Sider className='sidebar'>
            <Logo />
            <MenuList />
        </Sider>
        <Layout>
        <Header className="header">
        <div className="header-left">
          <img src={Slicer} alt="slicer"/>
        </div>
        <div className="header-middle"></div>
        <div className="header-right">
          <div className='bell'><BellOutlined /></div>
          <div className='name'>John Doe</div>
          <div className='man'>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>
        </Header>
        <Content className='content'>
          <div className="top">
            <div>
            <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '/data',
            title: <img src={DataEntry} alt="dataentry" className="anchor-image"/> ,
          },
          {
            key: 'part-2',
            href: '/tracker',
            title: <img src={Tracker} alt="tracker" className="anchor-image"/> ,
          },
        ]}
      />
            </div>

            <div></div>
            <div>
            <div className='button1'>
              <div>
                For:
              </div>
              <Dropdown.Button className="dropdown">FY 2023-24</Dropdown.Button>
            </div>
          </div>
          </div>
          <div className="between">
            <img src={PendingTracker} alt="pendingtracker" />
            <img src={PendingReviews} alt="pendingreviews" />
          </div>
          <p>Autosaved at 12:31 pm</p>
          <div className="bottom">
      <div className="btn-container">
        <Button icon={<SearchOutlined />} className="btn-btn">
          Search for a business unit
        </Button>
      </div>
      <div className="tablediv">
        <Table columns={columns} dataSource={data} pagination={false}/>
      </div>
    </div>
        </Content>
        </Layout>
    </Layout>
  )
}

export default TrackerPage