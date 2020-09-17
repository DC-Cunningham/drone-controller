import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const linkItems = [
  { title: "About", to: "/about" },
  { title: "Flightpaths", to: "/flightpaths" },
  { title: "New Command", to: "/newcommand" },
];

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  & > li {
    display: inline-block;
    padding: 30px 15px;
    margin: 0 10px;
  }
  @media (max-width: 1200px) {
    flex-flow: column nowrap;
    background: ${({ theme }) => theme.primaryLight};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primarylight};
      text-decoration: none;
      transition: color 0.3s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => "#fff"};
  color: ${(props) => (props.active ? "#2adedd" : "#000")};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: left;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

const Menu = ({ open, setOpen }) => {
  const location = useLocation();

  return (
    <StyledUL open={open}>
      {linkItems.map((linkItem) => (
        <li key={linkItem.title}>
          <StyledLink
            to={linkItem.to}
            active={location.pathname === linkItem.to ? "true" : undefined}
            onClick={() => setOpen(!open)}
          >
            {linkItem.title}
          </StyledLink>
        </li>
      ))}
    </StyledUL>
  );
};

export default Menu;
