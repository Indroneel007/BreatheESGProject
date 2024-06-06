import React from 'react'
import { Menu } from 'antd'
import {BarChartOutlined, ProductOutlined, PieChartOutlined
, SnippetsOutlined, MenuOutlined, UpCircleOutlined, LineChartOutlined,
DatabaseFilled, LogoutOutlined
} from '@ant-design/icons';
import './MenuList.scss'

const MenuList = () => {
  return (
    <Menu theme='dark' mode='inline' className='menu-bar'>
        <Menu.Item key="Dashboard" icon={<BarChartOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="Entity_Manager" icon={<ProductOutlined />}>Entity Manager</Menu.Item>
        <Menu.Item key="Data_Manager" icon={<PieChartOutlined />}>Data Manager</Menu.Item>
        <Menu.Item key="Reporting" icon={<SnippetsOutlined />}>Reporting</Menu.Item>
        <Menu.Item key="Materiality" icon={<MenuOutlined />}>Materiality</Menu.Item>
        <Menu.Item key="Suppliers" icon={<UpCircleOutlined />}>Suppliers</Menu.Item>
        <Menu.Item key="Analytics" icon={<LineChartOutlined />}>Analytics</Menu.Item>
        <Menu.Item key="Targets" icon={<DatabaseFilled />}>Targets</Menu.Item>
        <Menu.Item key="Logout" icon={<LogoutOutlined />} className="custom-menu-item">Logout</Menu.Item>
    </Menu>
  )
}

export default MenuList