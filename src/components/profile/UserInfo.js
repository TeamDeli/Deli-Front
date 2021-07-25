import React from 'react';
import Styled from 'styled-components';


const UserInfoWrap = Styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;

	.userImage {
		width: 300px;
		height: 265px;
		width: 100%;
		margin-right: 4rem;
	}

	.userInfo {
		width: 100%;

		h1 {
			margin-bottom: .2rem;
		} 

		h2 {
			margin-bottom: .2rem;
		}
	}
`;

//서버 통해서 Bio 값 JSON으로 받아오기
const UserInfo = ({ userInfo }) => {
	console.log(userInfo);
	try {
		const {
			image, 
			name, 
			bio, 
			age, 
			gender, 
			birth
		} = userInfo;
	
		return (
			<UserInfoWrap>
				<img className="userImage" src={image} alt="userImage"/>
				<div className="userInfo">  
						<h1> 이름: {name} </h1>
						<h2> 자기소개: {bio} </h2>
						<h2> 나이: {age} </h2>
						<h2> 성별: {gender} </h2>
						<h2> 생일: {birth} </h2>
				</div>    
			</UserInfoWrap>
		);

	} catch (err) {
		console.error(err);
		console.log("빡치니까 오류나지마라");
	}


}

export default UserInfo;

//Bio 함수 불러올 때 인자 넘겨주기