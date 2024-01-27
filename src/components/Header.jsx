import React from "react";
import styled from "styled-components";
import {width} from "../hooks/useWindowsSize"
import useWindowsSize from "../hooks/useWindowsSize"
// import Out from '../out.png'
const Header = () => {
  const {width} = useWindowsSize()
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
          { width < 768 ? <img src="/images/out.png" alt="LogoIcon" /> : <img src="/images/unlink.png" style={{width: '160px'}} alt="LogoIcon" /> }
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="searchIcon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="homeIcon" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="networkIcon" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="jobsIcon" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="messagingIcon" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="notidicationsIcon" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
                <a>
                    <img src="/images/user.svg" alt="user" />
                    <span>Me</span>
                    <img src="/images/down-icon.svg" alt="downIcon" />
                </a>
                <SignOut>
                    <a>
                        Sign Out
                    </a>
                </SignOut>
            </User>
            <Work>
                <a>
                    <img src="images/nav-work.svg" alt="navwork" />
                    <span>Work <img src="images/down-icon.svg" alt="" /></span>
                </a>

            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  top: 0;
  position: fixed;
  padding: 5px 24px;
  padding-bottom: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;

  a > img {
    width: 64px;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      line-height: 1.75;
      padding: 0 8px 0 40px;
      border-radius: 2px;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.span`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active{
    span::after{
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid var(--white, #fff);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width: 100%;
        border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 0 0 5px 5px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align: center;
    display: none;
    cursor: pointer;    

`;

const User = styled(NavList)`
    a > svg {
        width: 24px;
        border-radius: 50%;
    }

    a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    span {
        display: flex;
        align-items: center;
    }
    &:hover {
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
`;



export default Header;
