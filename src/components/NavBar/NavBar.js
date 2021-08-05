import React from "react";
import {
  Nav,
  NavMenu,
  NavLink,
  Bars,
  Search,
  SearchWrap,
  Input,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import deliLogo from "../../assets/images/deli_edited.png";

const NavBar = () => (
  <>
    <Nav>
      <NavLink to="/">
        <img src={deliLogo} width="100" alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <Search>
          <SearchWrap>
            <Input type="text" placeholder="선물을 검색해주세요" />
          </SearchWrap>
        </Search>
        <NavLink to="/home" activeStyle>
          홈
        </NavLink>
        <NavLink to="/popular-gift" activeStyle>
          인기 선물
        </NavLink>
        <NavLink to="/find-friend" activeStyle>
          친구 찾기
        </NavLink>
        <NavLink to="/ranking" activeStyle>
          랭킹
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);

export default NavBar;
