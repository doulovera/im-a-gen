import styled from "styled-components";

export const Section = styled.section`
  min-width: 295px;
  width: 40%;
  margin: 0 auto;
  padding: 0 0 50px;
  text-align: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding: 20px 0;
  background-color: var(--bg-secondary);
  border-radius: 15px;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  &:hover,
  &:hover > a {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  &:hover > a {
    background-color: var(--blue-primary);
  }
`;

export const Img = styled.img`
  max-width: 260px;
  height: auto;
`;

export const Download = styled.a`
  position: absolute;
  left: calc(50% - 86px);
  bottom: -25px;

  padding: 10px 15px;

  background-color: var(--blue-secondary);

  border-radius: var(--input-border-radius);

  font-size: 1rem;
  color: #fff;
  text-decoration: none !important;

  transition: 0.3s ease-in-out;
`;
