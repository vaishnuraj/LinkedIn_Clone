// src/Components/Header/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Container>
        <Content>
          <Logo>
            <Link to="/home">
              <img id="linkedinlogo" src="/images/Linkedin.webp" alt="LinkedIn" />
            </Link>
          </Logo>
          <Search>
            <SearchInput type="text" placeholder="Search" />
            <StyledSearchIcon />
          </Search>
        </Content>
      </Container>
      <Nav>
        <NavListWrap>
          <NavList className={currentPath === '/home' ? 'active' : ''}>
            <Link to="/home">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </NavList>
          <NavList className={currentPath === '/network' ? 'active' : ''}>
            <Link to="/network">
              <PeopleIcon />
              <span>My Network</span>
            </Link>
          </NavList>
          <NavList className={currentPath === '/jobs' ? 'active' : ''}>
            <Link to="/jobs">
              <WorkIcon />
              <span>Jobs</span>
            </Link>
          </NavList>
          <NavList className={currentPath === '/messaging' ? 'active' : ''}>
            <Link to="/messaging">
              <MessageIcon />
              <span>Messaging</span>
            </Link>
          </NavList>
          <NavList className={currentPath === '/notifications' ? 'active' : ''}>
            <Link to="/notifications">
              <NotificationsIcon />
              <span>Notifications</span>
            </Link>
          </NavList>
          <User className={currentPath === '/profile' ? 'active' : ''}>
            <Link to="/profile">
              <PeopleIcon />
              <span>Me</span>
              <ArrowDropDownIcon />
            </Link>
          </User>
          <Work className={currentPath === '/work' ? 'active' : ''}>
            <Link to="/work">
              <WorkIcon />
              <span>Work</span>
              <ArrowDropDownIcon />
            </Link>
          </Work>
        </NavListWrap>
      </Nav>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 24px;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 20px;
  
  a img {
    height: 40px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  background-color: #eef3f8;
  padding: 5px 10px;
  max-width: 280px;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-size: 14px;
  color: #000;
  padding-left: 10px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: #00000099;
  margin-left: 8px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px 0;
  z-index: 100;

  @media (min-width: 992px) {
    position: static;
    position: sticky;
    top: 0;
    justify-content: flex-end;
    background-color: transparent;
    border-top: none;
    margin-left: 20px;
    right: 210px;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    justify-content: space-around;
    width: 100%;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #666666;

  &.active {
    color: #000000;
    border-bottom: 2px solid #0a66c2;
  }

  @media (max-width: 992px) {
    margin-right: 0;
    flex-direction: column;
    font-size: 12px;

    span {
      font-size: 10px;
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    span {
      margin-left: 5px;
      font-size: 14px;
    }

    &:hover {
      color: #0a66c2;

      svg {
        fill: #0a66c2;
      }
    }

    @media (max-width: 992px) {
      flex-direction: column;

      span {
        margin-left: 0;
        margin-top: 5px;
      }
    }
  }
`;

const User = styled(NavList)``;
const Work = styled(User)``;
const SignOut = styled.div``;

export default Header;
