import { styled } from "styled-components";

export const LoginWrapper = styled.div`
width: 100%;
height: 100vh;
.backImg{
    width: 100%;
    height: 100%;
}
.positionTitle{
    position: absolute;
    top: 30px;
    left: 30px;
    span{
        background-color: #fff;
        padding:3px 8px;
        border:1px solid #ccc;
        cursor: pointer;
    }
    span:nth-child(${props => props.activePositionIndex}){
    border:1px solid blue;
    box-shadow: 0 0 10px #ccc;
    color: blue;
}
}

.positionContent{
    position: absolute;
    top: 50%;
    left:${props => props.activePositionIndex===1?"30%":props.activePositionIndex===2?"50%":"80%"};
    transform: translate(-50%,-50%);
}
`