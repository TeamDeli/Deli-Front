import React from "react";
import Styled from "styled-components";

const UserInfoWrap = Styled.div`
	display: flex;
	margin-top: 70px;
	margin-left: 100px;

	.userImage {
		width: 200px;
		height: 200px;
		margin-right: 100px;
	}

	.userInfo {
		margin-top: 20px;
		h2 {
			font-size: 25px;
			font-weight: bold;
			margin-bottom: 10px; 
		}
		h1 {
			font-size: 33px;
			font-weight: bold;
			margin-bottom: 20px;
		}
	}
`;

const ButtonWrap = Styled.a`
	display: flex;
	flex-direction: column;
	margin-top: -60px;
	margin-left: 85px;

	.buttonClass {
		font-size: 35px;
		width:250px;
		height:60px;
		text-align:center;
		text-decoration:none;
		border-width:2px;
		color:#FFFFFF;
		border-color:#333029;
		font-weight:bold;
		border-top-left-radius:15px;
		border-top-right-radius:15px;
		border-bottom-left-radius:15px;
		border-bottom-right-radius:15px;
		box-shadow: 0px 1px 0px 0px #1c1b18;
		text-shadow: 0px 1px 0px #ffffff;
		background:linear-gradient(#FD6F22, #FD6F22);
	}
	
	.buttonClass:hover {
		background: linear-gradient(#FDAE82, #FDAE82);
	}
`;

const UserInfo = ({ userInfo }) => {
  try {
    const { image, name, bio, age, gender, birth } = userInfo;

    //a href 링크 수정 필요
    return (
      <div>
        <UserInfoWrap>
          <img className="userImage" src={image} alt="userImage" />
          <div className="userInfo">
            <h1> {name} </h1>
            <h2> 소개: {bio} </h2>
            <h2> 나이: {age} </h2>
            <h2> 성별: {gender} </h2>
            <h2> 생일: {birth} </h2>
          </div>
        </UserInfoWrap>
        <ButtonWrap>
          <a className="buttonClass" href="localhost:3000" alt="">
            친구 추가
          </a>
        </ButtonWrap>
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};

export default UserInfo;
