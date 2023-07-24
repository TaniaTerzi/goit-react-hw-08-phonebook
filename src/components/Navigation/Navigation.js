import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from 'hooks/index';
import { RotatingLines } from 'react-loader-spinner';
import styled from "styled-components";
import css from "./Navigation.module.css"
import UserMenu from "components/UserMenu/UserMenu";

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  const StyledLink = styled(NavLink)`
  color: white;
  &.active {
    color: black;
  }
  `;

  return (
    <>
      <header>
        <nav className={css.nav}>
          {!isLoggedIn && <StyledLink className={css.styledLink} to="/">Home</StyledLink>}
          {!isLoggedIn && <StyledLink className={css.styledLink} to="/signup">Register</StyledLink>}
          {!isLoggedIn && <StyledLink className={css.styledLink} to="/login">Login</StyledLink>}
          {isLoggedIn && <StyledLink className={css.styledLink} to="/contacts">Contacts</StyledLink>}
          {isLoggedIn && <UserMenu />}
      </nav>
      </header>  
      <main>
        <Suspense fallback={
          <div className={css.Loader}>
          <RotatingLines
            strokeColor="blueviolet"
            strokeWidth="5"
            animationDuration="1.5"
            width="96"
            visible={true}
          />
          </div>}>
          <Outlet />
        </Suspense>
      </main>
    </>  
  )
}

export default SharedLayout;