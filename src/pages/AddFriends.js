import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import UserInfo from "../components/profile/UserInfo";
import Friends from "../components/profile/Friends";
import { getProfile } from "../lib/api";
import axios from "axios";
import { withRouter } from "react-router";
import defaultImage from "../user.svg";

const AddFriendsWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const AddFriends = () => {
  //   (async () => {
  //     const response = await axios.get("https://localhost:4000/profile");
  //     console.log(response.data);
  //     setUserData(response.data);
  //   })();
  const [userData, setUserData] = useState(null);

  /*
	useEffect(() => {
		(async () => {
			const data = await getProfile();
			setUserData(data);
		})();
	}, [userData]);
	console.log(userData);
	*/

  setUserData({
    image: defaultImage,
    name: "기연",
    bio: "🔥🔥🔥",
    age: 24,
    gender: "여자", //나중에 boolean으로 바꾸기
    birth: "98.03.25",
    friendsList: ["경민", "태연", "주은", "소린", "기연"],
  });

  let userInfo;
  let userFriends;
  if (userData) {
    userInfo = {
      image: userData.image,
      name: userData.name,
      bio: userData.bio,
      age: userData.age,
      gender: userData.gender,
      birth: userData.birth,
    };

    userFriends = userData.friendsList;
  }

  return (
    <div>
      <AddFriendsWrap>
        <UserInfo userInfo={userInfo}></UserInfo>
        <Friends list={userFriends}></Friends>
      </AddFriendsWrap>
    </div>
  );
};

export default withRouter(AddFriends);
