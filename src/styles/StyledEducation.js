import styled from "styled-components"

export const colors = {
  blue: "rgb(142, 220, 230)",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "#1e5372",
  red: "rgb(214, 116, 116)",
  white: "rgb(208, 205, 223)",
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
  }
`
export const Item1 = styled.div`
  width: 30%;
  & p,
  h2,
  h3 {
    color: #000;
  }
  @media only screen and (max-width: 600px) {
    width: 50%;
    text-align: center;
  }
`

export const Item2 = styled.div`
  width: 50%;
  & p,
  h2 {
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
  background-color: #fff;
  color: ${colors.red};
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: ${colors.red};
    color: ${colors.white};
  }
`
