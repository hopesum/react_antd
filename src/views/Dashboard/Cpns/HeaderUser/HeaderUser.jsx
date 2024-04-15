import React, { memo, useEffect } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme } from 'antd';
import { useSelector } from 'react-redux';
import { HearderUserWrapper } from "./style"
const { useToken } = theme;
export default memo(function HeaderUser() {
    const { token } = useToken();

    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: 'none',
    };
    const items = [
    {
    key: '1',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
        </a>
    ),
    },
    {
    key: '2',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
        </a>
    ),
    disabled: true,
    },
    {
    key: '3',
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
        </a>
    ),
    disabled: true,
    },
    ];
    const { username="管理员", avatar=""} = useSelector((state)=>{
      return {
        avatar:state.user?.user?.avatar,
        username:state.user?.user?.username
      }
    })
    // const userInfo = useSelector(state => state.user)
    // console.log("🚀 ~ HeaderUser ~ userInfo:", userInfo)
    useEffect(() => { 

    })
    return (
        <HearderUserWrapper>
            <Dropdown
                menu={{
                    items,
                }}
                dropdownRender={(menu) => (
                    <div style={contentStyle}>
                        {React.cloneElement(menu, {
                            style: menuStyle,
                        })}
                        <Divider
                            style={{
                            margin: 0,
                            }}
                        />
                        <Space
                            style={{
                            padding: 8,
                            }}
                        >
                            <Button type="primary">Click me!</Button>
                        </Space>
                    </div>
                )}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='rightHeader'>
                      <img src={avatar} alt="" width={30}/>
                      {username}
                      <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </HearderUserWrapper>
    )
})
