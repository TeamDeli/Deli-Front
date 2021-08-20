import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import UserInfo from "../components/friends/UserInfo";
import Friends from "../components/friends/Friends";
import defaultImage from "../user.svg";
import WishList from "../components/friends/WishList";
import productImg from "../components/friends/bingsu.jpeg";

const AddFriendsWrap = Styled.div`
  display:flex;
  flex-direction: row;
	justify-content:space-around;
`;

const AddFriends = () => {
  // const [userData, setUserData] = useState(null);
  //const [_wishList, setWishList] = useState(null);
  const userInfo = {
    id: 1,
    email: "rusl0325@sookmyung.ac.kr",
    password: "1234",
    username: "기연",
    image: "https://sookflix.s3.ap-northeast-2.amazonaws.com/deli.png",
    gender: false,
    birth: "98.03.25",
    comment: "델리가조아요~❤",
  };

  let _wishList = [
    { img: productImg, title: "상품이름1" },
    { img: productImg, title: "상품이름2" },
    { img: productImg, title: "상품이름3" },
  ];

  let friendsList;

  friendsList = [
    {
      id: 1,
      username: "주은1",
    },
    {
      id: 2,
      username: "주은2",
    },
    {
      id: 3,
      username: "주은3",
    },
    {
      id: 4,
      username: "주은4",
    },
  ];

  return (
    <AddFriendsWrap>
      <Friends List={friendsList}></Friends>
      <div>
        <UserInfo userInfo={userInfo}></UserInfo>
        <WishList friendName={userInfo.name} wishList={_wishList}></WishList>
      </div>
    </AddFriendsWrap>
  );
};

export default AddFriends;
