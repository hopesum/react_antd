import React, { memo,useState } from 'react'
import PropTypes from 'prop-types'
import { LoginWrapper } from './style'
import loginImg from "../../images/login.webp"
import  LoginForm  from "./Cpns/LoginForm"
const Login = memo(function Login(props) {
  const [activePositionIndex, setActivePositionIndex] = useState(2)
  const handlePosition = (e) => {
    console.log("🚀 ~ handlePosition ~ e:", e)
    const index = e.target.innerText === "居左" ? 1 : e.target.innerText === "居中" ? 2 : 3
    setActivePositionIndex(index)
  }
  return (
    <LoginWrapper activePositionIndex={activePositionIndex}>
        {/* <img src={loginImg} className='backImg'></img> */}
        <img src={require("../../images/login.webp")} className='backImg'></img>
       <div className='positionTitle' onClick={(e) => { handlePosition(e) }}>
          <span>居左</span>
          <span>居中</span>
          <span>居右</span>
        </div>
        <div className='positionContent'>
          <LoginForm></LoginForm>
        </div>
    </LoginWrapper>
  )
})

Login.propTypes = {

}

export default Login
