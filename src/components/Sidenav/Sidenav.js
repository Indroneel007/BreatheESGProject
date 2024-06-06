import React, {useState} from 'react'
import {Button, Layout, theme, Anchor, Menu, Dropdown, Table, Divider} from 'antd'
import {Link} from 'react-router-dom'
import {BellOutlined} from '@ant-design/icons'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import './Sidenav.scss'
import Logo from './Logo/Logo';
import MenuList from './MenuList/MenuList';
import Slicer from "../../images/Slicer.svg"
import Avatar from '../../images/Avatar.svg'
import DataEntry from '../../images/DataEntry.svg'
import Tracker from '../../images/Tracker.svg'
import Actions from '../../images/Actions.svg'
import Medium from '../../images/Medium.svg'
import Pending from '../../images/Pending.svg'
import Checkbox from '../../images/Checkbox.svg'
import Low from '../../images/Low.svg'
import High from '../../images/High.svg'
import Complete from '../../images/Complete.svg'

const columns = [
  {
    title: <img src={Checkbox} alt="checkbox" />,
    dataIndex:'checkbox'
  },
  {
    title: 'ASSESSMENT TITLE',
    dataIndex: 'assessmenttitle'
  },
  {
    title: 'TYPE',
    dataIndex:'type'
  },
  {
    title: 'NO. OF SUPPLIERS',
    dataIndex: 'suppliers'
  },
  {
    title:"SCORE",
    dataIndex:'score'
  },
  {
    title: 'RISK CLASSIFICATION',
    dataIndex:'riskclassification'
  },
  {
    title:"STATUS",
    dataIndex:'status'
  },
  {
    title: 'RESULT',
    dataIndex:'result'
  },
  {
    title: 'ACTIONS',
    dataIndex:'actions'
  }
]

const data = [
  {
    key: '1',
    Checkbox: <img src={Checkbox} alt="checkbox2" />,
    assessmenttitle: 'Assessment 1',
    type: 'BRSR',
    suppliers: '20',
    score:'-',
    riskclassification:<img src={Medium} alt="medium2" />,
    status: <img src={Pending} alt="pending2" />,
    result: '-',
    actions: <img src={Actions} alt="actions2" />
  },
  {
    key: '2',
    Checkbox: <img src={Checkbox} alt="checkbox3" />,
    assessmenttitle: 'Assessment 2',
    type: 'BRSR',
    suppliers: '25',
    score:'98',
    riskclassification:<img src={Low} alt="low3" />,
    status: <img src={Complete} alt="complete3" />,
    result: 'View',
    actions: <img src={Actions} alt="actions3" />
  },
  {
    key: '3',
    Checkbox: <img src={Checkbox} alt="checkbox4" />,
    assessmenttitle: 'Assessment 3',
    type: 'BRSR',
    suppliers: '35',
    score:'22',
    riskclassification:<img src={High} alt="high4" />,
    status: <img src={Complete} alt="complete4" />,
    result: 'View',
    actions: <img src={Actions} alt="actions4" />
  },
  {
    key: '4',
    Checkbox: <img src={Checkbox} alt="checkbox5" />,
    assessmenttitle: 'Assessment 3',
    type: 'Custom',
    suppliers: '49',
    score:'23',
    riskclassification:<img src={Medium} alt="medium5" />,
    status: <img src={Complete} alt="complete5"/>,
    result: 'View',
    actions: <img src={Actions} alt="actions5"/>
  },
  {
    key: '5',
    Checkbox: <img src={Checkbox} alt="checkbox6" />,
    assessmenttitle: 'Assessment 3',
    type: 'Custom',
    suppliers: '100',
    score:'42',
    riskclassification:<img src={Medium} alt="medium" />,
    status: <img src={Complete} alt="complete6" />,
    result: 'View',
    actions: <img src={Actions} alt="actions" />
  }
]

const {Header, Sider, Content} = Layout;
const {Link: AnchorLink} = Anchor
const Sidenav = () => {
  return (
    <Layout>
        <Sider className='sidebar'>
            <Logo />
            <MenuList />
        </Sider>
        <Layout>
        <Header className="header">
        <div className="header-left">
          <img src={Slicer} alt="slicer" />
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
            href: '/',
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
              <div>
                <Dropdown.Button className="dropdown">FY 2023-24</Dropdown.Button>
              </div>
            </div>
          </div>
          <div className='button1'>
          <Button type="primary" className="primary-button">Submit For Approval</Button>
          </div>
          </div>
          <div className="bottom">
            <div className="table-container"><Table columns={columns} dataSource={data} pagination={false} /></div>
          </div>
        </Content>
        </Layout>
    </Layout>
  )
}

export default Sidenav