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

  & > h5 {
    font-size: 14px;
    font-weight: 500;
  }
`;
const HeaderTopLeftWrapSC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 388px;
`;
const HeaderTopNumberSC = styled("div")`
  width: 50%;
`;
const HeaderTopMailSC = styled("div")`
  width: 50%;
`;
const HeaderTopCenterWrapSC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 70%;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;
const HeaderTopSocialSC = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 25%;
`;

const HeaderTopInputSC = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
const HeaderTopElemSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  & > h5 {
    margin-left: 10px;
  }
`;

const HeaderTopRightWrapSC = styled("div")`
  width: 10%;
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
});
