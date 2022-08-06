import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import { useHeaderMainWrapStyle } from "./style";

const HeaderMain = () => {
  const { HeaderMainWrap } = useHeaderMainWrapStyle();
  return (
    <HeaderMainWrap>
      <HeaderTop />
      HeaderMain
    </HeaderMainWrap>
  );
};

export default React.memo(HeaderMain);
