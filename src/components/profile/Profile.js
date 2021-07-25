import React from 'react';
import Styled from "styled-components";
import UserInfo from './UserInfo';
import defaultImage from '../../user.svg'


const ProfileWrap = Styled.div`

`;

const Profile = () => {
    //dummyData, 나중에 서버 통신으롣 데이터 받아오는 코드로 수정
    const userInfo = {
        image: defaultImage,
        name: "기연",
        bio: "프론트 어뜩하냐 진짜 ㅋㅋ",
        age: 24,
        gender: "여자", //나중에 boolean으로 바꾸기
        birth: "98.03.25"
    }

    return(
        <UserInfo userInfo={userInfo}></UserInfo>
        
    );
}

export default Profile;