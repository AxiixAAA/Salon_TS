import React from "react";
import FaceBookIcon from "../../../../assets/social/facebook.svg";
import YouTubeIcon from "../../../../assets/social/youtube.svg";
import Vkontakte from "../../../../assets/social/Vkontakte.svg";
import InstagramIcon from "../../../../assets/social/Instagram.svg";
import AvatarIcon from "../../../../assets/img/avatar.svg";
import ClipboardIcon from "../../../../assets/img/clipboard.svg";
import ScissorsIcon from "../../../../assets/img/scissors.svg";
import TricolorIcon from "../../../../assets/img/tricolor.svg";
import WhiteTickIcon from "../../../../assets/img/whiteTick.svg";
import { useHeaderTopStyled } from "./style";

const HeaderTop = () => {
  const {
    HeaderTopMailSC,
    HeaderTopWrapSC,
    HeaderTopElemSC,
    HeaderTopInputSC,
    HeaderTopSocialSC,
    HeaderTopNumberSC,
    HeaderTopLeftWrapSC,
    HeaderTopLanguageSC,
    HeaderTopRightWrapSC,
    HeaderTopCenterWrapSC,
  } = useHeaderTopStyled();

  return (
    <HeaderTopWrapSC>
      <HeaderTopLeftWrapSC>
        <HeaderTopNumberSC>
          <h4>+7 (912) 799-69-80</h4>
        </HeaderTopNumberSC>
        <HeaderTopMailSC>
          <h4>info@gmail.com</h4>
        </HeaderTopMailSC>
      </HeaderTopLeftWrapSC>
      <HeaderTopCenterWrapSC>
        <HeaderTopSocialSC>
          <FaceBookIcon />
          <Vkontakte />
          <InstagramIcon />
          <YouTubeIcon />
        </HeaderTopSocialSC>
        <HeaderTopInputSC>
          <HeaderTopElemSC>
            <AvatarIcon />
            <h4>Кабинет клиента</h4>
          </HeaderTopElemSC>
          <HeaderTopElemSC>
            <ClipboardIcon />
            <h4>Кабинет мастера</h4>
          </HeaderTopElemSC>
          <HeaderTopElemSC>
            <ScissorsIcon />
            <h4>Онлайн-запись</h4>
          </HeaderTopElemSC>
        </HeaderTopInputSC>
      </HeaderTopCenterWrapSC>
      <HeaderTopRightWrapSC>
        <HeaderTopElemSC>
          <TricolorIcon />
          <HeaderTopLanguageSC>Язык</HeaderTopLanguageSC>
          <WhiteTickIcon />
        </HeaderTopElemSC>
      </HeaderTopRightWrapSC>
    </HeaderTopWrapSC>
  );
};

export default React.memo(HeaderTop);
