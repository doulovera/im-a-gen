import styled from "styled-components";
import Sides from "../../assets/images/sides.svg";

interface Size {
  isWidth: boolean;
}

interface Props {
  thumbColor: string;
}

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-width: 300px;
  width: 80%;
  min-height: 80px;
  height: auto;
  padding: 1% 0;
  margin: 60px auto;
  border-radius: 10px;
  background-color: var(--bg-secondary);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  & input {
    font-family: "Open Sans", sans-serif;
    margin: 0 5px;
  }
`;

export const LabelInput = styled.label`
  position: relative;
  display: inline-block;

  &::before {
    content: url(${Sides});
    position: absolute;
    ${({ isWidth }: Size) =>
      isWidth
        ? `
        transform: rotate(90deg);
        top: calc(50% - 11.5px);
        left: 10px;
      `
        : `
        top: calc(50% - 10.5px);
        left: 13px;
      `}
  }

  &::after {
    content: "px";
    position: absolute;
    top: calc(50% - 7px);
    right: 15px;
  }
`;

export const InputSize = styled.input`
  width: 40px;
  height: 35px;
  padding: 0 25px 0 30px;
  background-color: var(--bg-primary);
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: var(--input-border-radius);
  outline: none;
  transition: 0.15s ease-in;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  & {
    -moz-appearance: textfield;
  }

  &:focus {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
  }
`;

export const InputCheckbox = styled.input`
  width: 30px;
  height: 30px;

  & + i {
    position: absolute;
    left: 0;
    top: -3px;
    width: 15px;
    height: 15px;
    border: 2px solid transparent;
    border-radius: var(--input-border-radius);
    background-color: var(--bg-primary);
    transition: 0.15s ease-in-out;
    cursor: pointer;
  }

  &:focus + i {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
  }

  &:checked + i {
    background-color: var(--blue-primary);
  }
`;

export const LabelBlurInput = styled.label`
  margin: 0 5px;
  padding: 12px 10px;
  border-radius: var(--input-border-radius);
  background-color: var(--bg-primary);

  & span {
    display: inline-block;
    padding: 0 10px;
    width: 10px;
    font-size: 0.7rem;
    font-weight: bold;
  }
`;

export const InputBlur = styled.input`
  width: 90px;
  margin: 8.25px 0;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    background: #eaeaec;
    border: 0.9px solid rgba(1, 1, 1, 0.1);
    border-radius: 25px;
    width: 100%;
    height: 8.5px;
    cursor: pointer;
  }
  &:focus::-webkit-slider-thumb {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
    transition: 0.15s ease-in-out;
  }
  &::-webkit-slider-thumb {
    margin-top: -9.15px;
    width: 25px;
    height: 25px;
    background: ${({ thumbColor }: Props) => thumbColor};
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #f7f7f8;
  }
  &::-moz-range-track {
    background: #eaeaec;
    border: 0.9px solid rgba(1, 1, 1, 0.1);
    border-radius: 25px;
    width: 100%;
    height: 8.5px;
    cursor: pointer;
  }
  &:focus::-moz-range-thumb {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
    transition: 0.15s ease-in-out;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: ${({ thumbColor }: Props) => thumbColor};
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
  }
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 8.25px 0;
    color: transparent;
    width: 100%;
    height: 8.5px;
    cursor: pointer;
  }
  &::-ms-fill-lower {
    background: #dddde0;
    border: 0.9px solid rgba(1, 1, 1, 0.1);
    border-radius: 50px;
  }
  &::-ms-fill-upper {
    background: #eaeaec;
    border: 0.9px solid rgba(1, 1, 1, 0.1);
    border-radius: 50px;
  }
  &:focus::-ms-thumb {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
    transition: 0.15s ease-in-out;
  }
  &::-ms-thumb {
    width: 25px;
    height: 25px;
    background: ${({ thumbColor }: Props) => thumbColor};
    border: 0px solid rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  &:focus::-ms-fill-lower {
    background: #eaeaec;
  }
  &:focus::-ms-fill-upper {
    background: #f7f7f8;
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px 0;
  background-color: var(--blue-primary);
  outline: none;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: 0.15s ease-in;
  cursor: pointer;

  &:focus {
    border: 2px solid var(--blue-primary);
    box-shadow: 0 0 0 3px var(--blue-secondary);
  }

  &:hover {
    background-color: var(--blue-secondary);
  }

  &.disabled {
    cursor: not-allowed;
    background-color: var(--bg-primary);
  }
`;
