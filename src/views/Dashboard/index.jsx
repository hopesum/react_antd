import React, { memo, useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

import { BoardWrapper } from './style'
import { getUserAuth } from '@/axios/login/login'
import HeaderUser from './Cpns/HeaderUser/HeaderUser';


const { Header, Sider, Content } = Layout;
export default memo(function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useEffect(() => {
    getUserAuth().then(res => {
      console.log(res)
    })
  },[])
    return (
    <BoardWrapper>
        <Layout
            style={{width:'100%',height:'100%'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                    },
                    {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                    },
                    {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                    },
                ]}
                />
            </Sider>
        <Layout>
            <Header
            style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'space-between',
            }}
            >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                fontSize: '16px',
                width: 64,
                height: 64,
                }}
            />
            <HeaderUser></HeaderUser>
            </Header>
            <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            >
            Content
            </Content>
        </Layout>
        </Layout>
    </BoardWrapper>)
})
