import styled from "styled-components";

export const FooterS = styled.footer`
  margin-top: 60px;
  background-color: #02193c;
  color: #ffffff;
  font-size: 0.8rem;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 15px 50px;

  min-width: 300px;
  max-width: 600px;
  min-height: 70px;
  height: auto;

  & div h3 {
    font-size: 1rem;
    padding: 10px 0 5px;
  }

  & div ul {
    list-style: none;
  }

  & div ul li {
    padding: 2px 0;
  }

  @media only screen and (max-width: 728px) {
    display: block;
    padding: 20px 10px;
  }
`;
