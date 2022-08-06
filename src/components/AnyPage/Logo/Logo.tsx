import React from "react";
import styled from "styled-components";
import LogoIcon from "./img/LogoIcon.svg";
import LogoTitle from "./img/LogoTitle.svg";

const LogoContainerSC = styled("div")`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainerSC>
      <LogoIcon />
      <LogoTitle />
    </LogoContainerSC>
  );
};

export default React.memo(Logo);
