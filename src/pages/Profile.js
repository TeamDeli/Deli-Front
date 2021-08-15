import React, { useEffect, useState } from 'react';
import Styled from "styled-components";
import UserInfo from '../components/profile/UserInfo';
import Friends from '../components/profile/Friends';
import { getProfile } from '../lib/api';
import { withRouter } from 'react-router';
import defaultImage from '../user.svg'

const ProfileWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const Profile = () => {

	const [userData, setUserData] = useState({});

	//json-server로 연결해서 userData 가져오기	
	useEffect(() => {
		(async () => {
			const data = await getProfile();
			setUserData(data);
		})();
	},[]);
	
	/*
	const userData = {
		image: defaultImage,
		name: "기연",
		bio: "🔥🔥🔥",
		age: 24,
		gender: "여자", //나중에 boolean으로 바꾸기
		birth: "98.03.25",
		friendsList: ["경민", "태연", "주은", "소린", "기연"]
	}
	*/
	
	let userInfo
	let userFriends
	if (userData) {
		userInfo  = {
			image: userData.image,
			name: userData.name,
			bio: userData.bio,
			age: userData.age,
			gender: userData.gender,
			birth: userData.birth,
		}
		userFriends = userData.friendsList;
	}
	
	return(
		<div>
				<ProfileWrap>
					<UserInfo userInfo={userInfo}></UserInfo>
					<Friends list={userFriends}></Friends>
				</ProfileWrap>
		</div>
	);
}

export default withRouter(Profile);