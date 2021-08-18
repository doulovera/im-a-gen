import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;

  & .social-media,
  & .made-by {
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  & .logo {
    width: 40px;
    height: 40px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 50%;
  }

  & .logo img {
    width: 40px;
    height: 40px;
  }
`;
