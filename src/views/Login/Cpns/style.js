import { styled } from "styled-components";

export const FormContentWrapper = styled.div`
width:420px;
height: 390px;
border: 1px solid black;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
background-color: white;
.userLoginTitle{
    text-align: center;
    margin:35px 0;
}
.vertifyCodeData{
    display: flex;
    .vertifyImg{
        width: 100px;
        margin-left: 20px;
    }
}
.aboutPassword{
    margin-left: 60px;
    display: flex;
    margin-bottom: 20px;
    .login-form-forgot{
        margin-left: 20px;
    }
}

`