import styled from "styled-components"
import { above } from "./index"

export const colors = {
  primary: "rgb(214, 116, 116)",
  secondary: "rgb(208, 205, 223)",
  gray: "#969696",
  lightBlue: "rgba(28, 138, 219, 0.46)",
  softGray: "#f6f8f9",
}

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
    130deg,
    ${colors.secondary},
    ${colors.primary}
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
  background-color: ${colors.secondary};
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

export const StyledCards = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  p,
  h1,
  h3,
  small {
    font-family: "Montserrat", sans-serif;
  }
  h2 {
    color: ${colors.darkBlue};
    font-family: "Montserrat", sans-serif;
  }
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    margin: 0;
  }
  div {
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

export const StyledProjectCards = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  section {
    display: grid;
    grid-gap: 1rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 10rem;
    `};
    article {
      background: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
      h3 {
        padding: 0.3rem 1rem;
        margin: 0;
      }
      p {
        padding: 0.3rem 1rem;
        margin-bottom: 0;
      }
    }
  }
`
export const Icons = styled.div`
  background: #f5f5f5;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  img {
    margin: 15px;
    width: 40px;
    height: 40px;
    object-fit: cover;
    object-position: center;
  }
  @media only screen and (max-width: 425px) {
    img {
      margin: 10px;
    }
  }
`

export const FullProject = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #f2f2f2;
  section {
    width: 80%;
    article {
      display: Flex;
      justify-content: space-around;
      align-items: center;
      .gatsby-image-wrapper {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        & :hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
      }
      @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0;
      }
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 0;
      .change-direction {
        flex-direction: column-reverse;
      }
    }
  }
`
export const Image = styled.div`
  width: 35%;
  padding: 2rem;
  background: transparent;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 15px;
  }
`

export const Description = styled.div`
  width: 60%;
  padding: 2rem;
  h3,
  p {
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 15px;
  }
`

export const Description2 = styled.div`
  width: 60%;
  padding: 2rem;
  h3,
  p {
    text-align: left;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 15px;
  }
`
