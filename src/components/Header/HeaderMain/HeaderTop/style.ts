import { device } from "../../../../media/MediaObj";
import styled from "styled-components";

const HeaderTopWrapSC = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.oceanBlueV2};
  color: ${({ theme }) => theme.colors.white};

  & * h4 {
    font-size: 14px;
    font-weight: 500;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const HeaderTopLeftWrapSC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 388px;
  @media (max-width: 600px) {
    display: none;
  }
  @media ${device.tablet} {
    width: 144px;
  }
`;
const HeaderTopNumberSC = styled("div")`
  width: 50%;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const HeaderTopMailSC = styled("div")`
  width: 50%;

  @media ${device.tablet} {
    display: none;
  }
`;
const HeaderTopCenterWrapSC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const HeaderTopSocialSC = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 25%;

  @media ${device.laptop} {
    display: none;
  }
`;

const HeaderTopInputSC = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 50%;

  @media ${device.laptopL} {
    width: 70%;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;
const HeaderTopElemSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  & > h4 {
    margin-left: 9px;
  }
`;
const HeaderTopRightWrapSC = styled("div")`
  width: 10%;

  @media ${device.laptop} {
    display: none;
  }
`;
const HeaderTopLanguageSC = styled("h4")`
  margin-right: 10px;
`;

export const useHeaderTopStyled = () => ({
  HeaderTopWrapSC,
  HeaderTopLeftWrapSC,
  HeaderTopNumberSC,
  HeaderTopMailSC,
  HeaderTopCenterWrapSC,
  HeaderTopSocialSC,
  HeaderTopInputSC,
  HeaderTopRightWrapSC,
  HeaderTopElemSC,
  HeaderTopLanguageSC,
});
