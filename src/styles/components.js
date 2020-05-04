import styled from "styled-components"
import { above } from "./index"

export const colors = {
  green: "#1C8ADB",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "rgba(28, 138, 219, 0.46)",
  softGray: "#f6f8f9",
}

export const StyledBio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  color: white;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;
  
  div{
    padding: 1rem;
    width: 40vw;
    color: #000;
  };
  & h2 {
    padding-bottom: 20px;
  };
  @media only screen and (max-width: 600px) {
  div {
    width: 100%;
    color: #ffffff;
    background-color: ${colors.darkBlue};
  };
  & h2 {
    padding-bottom: 0px;
  };
}
  ${above.medium`
    padding: 2rem 4rem;
    flex-direction: row;
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.mediumL`
    padding: 2rem 4rem;
    flex-direction: row;
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.large`
    padding: 2rem 10rem;
    flex-direction: row;
  `}
  &:before{
    content: " ";
    z-index: -1;
    position: absolute;
    transform: rotate(-19deg);
    border-radius: 35%;
    top: -25%;
    width: 120%;
    height: 15rem;
    ${above.medium`
      height: 20rem;
      top: -50%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 52vw;
      top: -66%;
    `}
  };
`

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-color: ${colors.green};
  color: ${colors.softGray};
  border-radius: 10px;
  &:hover {
    background-color: ${colors.softGray};
    color: ${colors.green};
  }
`

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors.darkBlue},
    ${colors.lightBlue}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`

export const Footer = styled.footer`
  background-color: ${colors.darkBlue};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  bottom: 0;
  a {
    color: ${colors.green};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`

export const StyledCertificates = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  h2 {
    color: ${colors.darkBlue};
  }
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    margin: 0;
  }
  article {
    display: flex;
    flex-direction: column;
    height: 290px;
    align-items: center;
    padding-bottom: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    p {
      margin: 0;
      color: ${colors.green};
      font-weight: 500;
      font-size: 1.2rem;
    }
    small {
      color: ${colors.darkBlue};
      font-weight: 500;
      font-size: 1.2rem;
    }
    a {
      text-decoration: none;
      color: ${colors.darkBlue};
      font-size: 0.8rem;
      border-bottom: 3px solid ${colors.green};
      span {
        color: ${colors.green};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  section {
    display: grid;
    grid-gap: 2rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 10rem;
    `};
  }
`
