import React, { useState } from 'react';
import Styled from 'styled-components';

const FriendsWrap = Styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 140px;

  input {
    width: 300px;
    background-color:#fffff;
    border: 2px solid #FD6F22;
    color: black;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }
  input::placeholder {
    color: grey;
  }
  input:focus {
    outline: none;
  }


`;

const Friends = ({ friendsList, getFriendName }) => {
  try{
    const [userName, setUserName] = useState("");

    const handleChange = (event) => {
      setUserName(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      getFriendName(userName);
      setUserName("");
    };

    //submit하고 result 만들어야함


    return(
      <FriendsWrap>
        <h1>친구</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="친구 이름을 입력해주세요"
            value={userName}
            onChange={handleChange}
          />
        </form>
      </FriendsWrap>
    );

  } catch (err) {
    console.log(err);
  }
}

export default Friends;