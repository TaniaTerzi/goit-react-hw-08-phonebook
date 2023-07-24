import React from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import styled from "styled-components";
import css from './UserMenu.module.css'

function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: white;
  }
  `;

  const handleLogout = () => {
      dispatch(logOut());
    }

  return (
    <div className={css.nav}>
      <span className={css.styledSpan}>{user.email}</span>
      <StyledLink onClick={handleLogout} className={css.styledLink}>Logout</StyledLink>
    </div>
  )
}

export default UserMenu;