import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderTop from "./HeaderTop/HeaderTop";
import { useHeaderMainWrapStyle } from "./style";

const HeaderMain = () => {
  const { HeaderMainWrap } = useHeaderMainWrapStyle();
  return (
    <HeaderMainWrap>
      <HeaderTop />
      <HeaderBottom />
    </HeaderMainWrap>
  );
};

export default React.memo(HeaderMain);
