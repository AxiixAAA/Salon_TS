import Link from "next/link";
import React from "react";
import Logo from "../../../AnyPage/Logo/Logo";
import { useHeaderBottomStyle } from "./style";

const HeaderBottom = () => {
  const {
    LineAnimationSC,
    HeaderBottomLeftSC,
    HeaderBottomWrapSC,
    HeaderBottomRightSC,
    HeaderBottomCenterSC,
    HeaderBottomMenuItemSC,
    HeaderBottomRightTitleSC,
  } = useHeaderBottomStyle();
  return (
    <HeaderBottomWrapSC>
      <HeaderBottomLeftSC>
        <Logo />
      </HeaderBottomLeftSC>
      <HeaderBottomCenterSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">О нас</Link>
        </HeaderBottomMenuItemSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">Коворкинг</Link>
        </HeaderBottomMenuItemSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">Франшиза</Link>
        </HeaderBottomMenuItemSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">Обучение</Link>
        </HeaderBottomMenuItemSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">Блог</Link>
        </HeaderBottomMenuItemSC>
        <HeaderBottomMenuItemSC>
          <Link href="#">Контакты</Link>
        </HeaderBottomMenuItemSC>
      </HeaderBottomCenterSC>
      <HeaderBottomRightSC>
        <LineAnimationSC />
        <HeaderBottomRightTitleSC>
          <Link href="#">Найти мастера или коворкинг</Link>
        </HeaderBottomRightTitleSC>
      </HeaderBottomRightSC>
    </HeaderBottomWrapSC>
  );
};

export default React.memo(HeaderBottom);
