import styled from "styled-components";

export const Header = styled.header`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding-left: 5.5rem;
  padding-right: 5.5rem;
`;

export const LogoGroup = styled.div`
  color: white;
  display: flex;
  align-items: center;
  width: 25%;
  display: flex;
  gap: 7px;
  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  > img {
    height: 30px;
    width: 30px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    gap: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    text-decoration: none;
  }

  > button {
    background-color: transparent;
    align-self: center;
    width: 130px;
    height: 42px;
    color: #fff;
    border: 1px solid #ffffff;
    border-radius: 2px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  padding-left: 5rem;

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
    color: #fff;
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  > button {
    display: flex;
    justify-content: center;
    gap: 7px;
    align-items: center;
    border: none;
    color: #fff;
    width: 200px;
    height: 60px;
    margin-top: 2rem;
    background: #06331b;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const ImageContainer = styled.div`
  padding-top: 3rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
