import styled, { keyframes } from "styled-components";
import { device } from "./../../../../media/MediaObj";

const HeaderBottomWrapSC = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: white;
  background-color: ${({ theme }) => theme.colors.oceanBlue};
  & * a {
    font-size: 18px;
    font-weight: 500;

    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size 0.3s;
    &:hover {
      background-size: 100% 1px;
    }
  }
  @media ${device.laptopL} {
    height: 60px;

    & * a {
      font-size: 16px;
    }
  }
`;
const HeaderBottomLeftSC = styled("div")`
  width: 20%;
  padding-left: 30px;

  @media (max-width: 1100px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    padding: 0px 30px 0px;
    display: flex;
    justify-content: right;
  }
`;
const HeaderBottomCenterSC = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 50%;
  text-align: center;

  @media ${device.laptopL} {
    width: 60%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const HeaderBottomRightSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 3%;
  width: 30%;

  @media ${device.laptopL} {
    padding-right: 0%;
    flex-direction: column-reverse;
    width: 20%;
  }
  @media (max-width: 1100px) {
    width: 220px;
    margin-right: 3%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const HeaderBottomRightTitleSC = styled("div")`
  margin-left: 30px;

  & > a {
    background: none;
    &:hover {
      background-size: 0% 0px;
    }
  }
  @media ${device.laptopL} {
    margin-left: 0px;
  }
`;
const HeaderBottomMenuItemSC = styled("div")`
  width: 14%;
`;
const gradient = keyframes`
  0% { background-position: 0 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0 50% }
`;
const LineAnimationSC = styled("div")`
  background: linear-gradient(45deg, #e8cbc0, red);
  width: 50px;
  height: 5px;
  background-size: 200% 200%;
  animation: ${gradient} 3s ease infinite;

  @media ${device.laptopL} {
    width: 200px;
    height: 2px;
  }
`;

export const useHeaderBottomStyle = () => ({
  LineAnimationSC,
  HeaderBottomLeftSC,
  HeaderBottomWrapSC,
  HeaderBottomRightSC,
  HeaderBottomCenterSC,
  HeaderBottomMenuItemSC,
  HeaderBottomRightTitleSC,
});
