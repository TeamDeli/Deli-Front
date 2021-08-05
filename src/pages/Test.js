import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import UserInfo from "../components/friends/UserInfo";
import Friends from "../components/friends/Friends";
import WishTest from "../components/friends/WishTest";
import defaultImage from "../user.svg";

const TestWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const Test = () => {
  const userData = {
    image: defaultImage,
    name: "기연",
    bio: "🔥🔥🔥",
    age: 24,
    gender: "여자", //나중에 boolean으로 바꾸기
    birth: "98.03.25",
    friendsList: ["경민", "태연", "주은", "소린", "기연"],
  };
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
    <TestWrap>
      <Friends list={userFriends}></Friends>
      <div className="rightContainer">
        <UserInfo userInfo={userInfo}></UserInfo>
        <WishTest></WishTest>
      </div>
    </TestWrap>
  );
};

export default Test;
