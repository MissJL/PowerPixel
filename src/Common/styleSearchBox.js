import styled, { css, keyframes } from "styled-components";
import IconSearch from "../icons/search";
import IconArrowRight from "../icons/arrowRight";

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin-right: 80px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 4px solid #303c6b;
  padding 5px;
  background: #5b6484;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 250px;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      border: 4px solid #1b2757;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/* icons */

const fadeIn = keyframes`
from{
    opacity: 0;
}
to{
    opacity:1;
}`;

const iconCommonCss = css`
  height: 1rem;
  width: 1, 0.25rem;
  fill: white;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(IconSearch)`
  ${iconCommonCss}
`;

export const IconRightArrow = styled(IconArrowRight)`
  ${iconCommonCss}
  align-self: flex-end;

  &:hover {
    fill: black;
  }
`;
