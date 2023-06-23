import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <NavContainer>
      <LeftNavContainer>
        <Link to={Header}>
          <img src="/src/assets/icons8-linkedin-48.png" />
        </Link>
        <input type="text" placeholder="Search" id="search-input" />
      </LeftNavContainer>
      <RightNavContainer>
        <Link to="/home">
          <NavItem>
            <img src="/src/assets/icons8-home-64.png" />
            <span>Home</span>
          </NavItem>
        </Link>
        <Link to="/network">
          <NavItem>
            <img src="/src/assets/icons8-group-48.png" />
            <span>Network</span>
          </NavItem>
        </Link>
        <Link to="/jobs">
          <NavItem>
            <img src="/src/assets/icons8-jobs-58.png" />
            <span>Jobs</span>
          </NavItem>
        </Link>
        <Link to="/messages">
          <NavItem>
            <img src="/src/assets/icons8-chat-bubble-50.png" />
            <span>Messages</span>
          </NavItem>
        </Link>
        <Link to="notifications">
          <NavItem>
            <img src="/src/assets/icons8-notifications-32.png" />
            <span>Notifications</span>
          </NavItem>
        </Link>
      </RightNavContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input#search-input {
    border: none;
    background-color: #eef3f8;
    border-radius: 3px;
    width: 250px;
    padding-right: 0;
    transition: padding-right 0.3s ease;
    padding: 0.5rem 0 0.5rem 0.75rem;
    margin-right: 4rem;
    margin-left: 2rem;
  }

  input#search-input:focus {
    padding-right: 2rem;
  }

  input#search-input::placeholder {
    background-image: url("/src/assets/icons8-search-50.png");
    background-repeat: no-repeat;
    background-size: 15px;
    text-indent: 20px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  img {
    height: 30px;
  }
  text-decoration: none;
  color: black;
  padding-left: 2rem;
`;

const LeftNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
`;
const RightNavContainer = styled(LeftNavContainer)`
  margin: 0 2rem 0 0;
  width: 50vw;
  justify-content: space-evenly;
`;
