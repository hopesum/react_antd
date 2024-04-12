import React, { memo, useState } from 'react'
import { Button, Form, Input, Checkbox, message } from 'antd';
import { FormContentWrapper } from './style';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getVertifyCode, loginApi } from '../../../axios/login/login';



/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
export default memo(function LoginForm() {
  const [form] = Form.useForm();
  const [vertifyCode, setVertifyCode] = useState('')
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const changeVertifyImg = () => {
    getVertifyCode().then(res => {
      console.log(res, 9852335)
      if(res.status === 200) {
        console.log(res.data)
        setVertifyCode(res.data?.data?.base64)
        setText(res?.data?.data?.text)
      }
    })
  }
  const onFinish = (values) => {
    console.log(values,777);
  };
  useEffect(() => {
    changeVertifyImg()
  }, [])
  const login = () => {
    console.log(form.getFieldsValue(),"我是form.getFieldsValue()");
     form.validateFields().then(values => {
      console.log('Received values:', values);
      // 在这里处理获取到的表单数据，比如发送给后端进行验证等操作
       console.log("验证码", values?.user?.code);
      if (text !== values?.user?.code) {
        message.error('验证码错误')
        return
      }
      loginApi({ ...values?.user, tenantId: 2 }).then(res => {
        console.log(res,"我是登录的数据");
        if (res?.status == 200) {
          message.success('登录成功')
          navigate('/dashboard')
        }
      })
    }).catch(errorInfo => {
      console.log('Validation failed:', errorInfo);
    });

  }
  return (
    <FormContentWrapper>
      <h2 className='userLoginTitle'>用户登录</h2>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        name="nest-messages"
        onFinish={onFinish}
        style={{
        maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'username']}
          label="账号"
          rules={[
              {
              required: true,
              },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'password']}
          label="密码"
          rules={[
              {
              type: 'password',
              },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'code']}
          label="验证码"
        >
          <div className='vertifyCodeData'>
            <Input />
            <img src={vertifyCode} alt=""  className='vertifyImg' onClick={changeVertifyImg}/>
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 18 , offset: 8 }}  name={['user', 'remember']}  valuePropName="checked" noStyle>
          <div className="aboutPassword">
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </div>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 12 , offset: 8 }}
        >
        <Button type="primary" onClick={login}>
          登录
        </Button>
        </Form.Item>
      </Form>
  </FormContentWrapper>
  )
})
