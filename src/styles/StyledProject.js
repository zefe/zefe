import styled from "styled-components"

export const colors = {
  blue: "#1C8ADB",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "#1e5372",
  softGray: "#f6f8f9",
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Row = styled.div`
  padding: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${colors.darkBlue};
  }
`
export const Item1 = styled.div`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 50%;
    text-align: center;
  }
`

export const Item2 = styled.div`
  width: 50%;
  & p {
    color: #000;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-color: ${colors.softGray};
  color: ${colors.blue};
  border-radius: 10px;
  &:hover {
    background-color: ${colors.blue};
    color: ${colors.softGray};
  }
`
