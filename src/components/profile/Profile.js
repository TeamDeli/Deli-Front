import React, { useState } from 'react';
import Styled from "styled-components";
import UserInfo from './UserInfo';
import Friends from './Friends';
import defaultImage from '../../user.svg';


const ProfileWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

//dummyData, 나중에 서버 통신으롣 데이터 받아오는 코드로 수정
const Profile = () => {
  const userInfo = {
		image: defaultImage,
		name: "기연",
		bio: "🔥🔥🔥",
		age: 24,
		gender: "여자", //나중에 boolean으로 바꾸기
		birth: "98.03.25"
	}

	const friendsList = ["경민", "태연", "주은", "소린", "기연"];

	//이 코드 제대로 공부하기^^
	const [userState, setUserState] = useState({
    status: "idle",
    data: null,
  });

	const getFriendName = async (name) => {
    setUserState({ ...userState, status: "pending" });
    try {
			const data = friendsList[friendsList.indexOf(name)];
      if (data === null) throw Error;
      setUserState({ status: "resolved", data: data });
    } catch (e) {
      setUserState({ status: "rejected", data: null });
      console.log(e);
    }
	};


	return(
		<div>
				<ProfileWrap>
				<UserInfo userInfo={userInfo}></UserInfo>
				<Friends friendsList={friendsList} getFriendName={getFriendName}></Friends>
				</ProfileWrap>
		</div>
			
			
	);
}

export default Profile;