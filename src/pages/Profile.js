import React, { useEffect, useState } from 'react';
import Styled from "styled-components";
import UserInfo from '../components/profile/UserInfo';
import Friends from '../components/profile/Friends';
import WishList from '../components/profile/WishList';
import { getProfile } from '../lib/api';
import { withRouter } from 'react-router';
import productImg from "../components/friends/bingsu.jpeg";

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

	const wishList = [
		{ img: productImg, title: "상품이름1"},
		{ img: productImg, title: "상품이름2"},
		{ img: productImg, title: "상품이름3"},
		{ img: productImg, title: "상품이름4"}
	];
	
	return(
		<div>
			<ProfileWrap>
				<UserInfo userInfo={userInfo}></UserInfo>
				<Friends list={userFriends}></Friends>
			</ProfileWrap>
			<WishList friendName={userInfo.name} wishList={wishList}></WishList>
		</div>
	);
}

export default withRouter(Profile);