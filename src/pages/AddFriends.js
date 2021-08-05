import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import UserInfo from "../components/profile/UserInfo";
import Friends from "../components/profile/Friends";
import defaultImage from "../user.svg";
import WishList from "../components/friends/WishList";
import productImg from "../components/friends/bingsu.jpeg";

const AddFriendsWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const AddFriends = () => {
  console.log("AddFriends");
  // const [userData, setUserData] = useState(null);
  //const [_wishList, setWishList] = useState(null);
  const userData = {
    image: defaultImage,
    name: "기연",
    bio: "🔥🔥🔥",
    age: 24,
    gender: "여자", //나중에 boolean으로 바꾸기
    birth: "98.03.25",
    friendsList: ["경민", "태연", "주은", "소린", "기연"],
  };

  let _wishList = [
    { img: productImg, title: "상품이름1" },
    { img: productImg, title: "상품이름2" },
    { img: productImg, title: "상품이름3" },
  ];

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
    <AddFriendsWrap>
      <Friends list={userFriends}></Friends>
      <div>
        <UserInfo userInfo={userInfo}></UserInfo>
        <WishList friendName={userInfo.name} wishList={_wishList}></WishList>
      </div>
    </AddFriendsWrap>
  );
};

export default AddFriends;
