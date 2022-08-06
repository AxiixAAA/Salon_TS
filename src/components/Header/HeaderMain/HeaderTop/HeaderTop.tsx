import React from "react";
import FaceBookIcon from "../../../../assets/social/facebook.svg";
import YouTubeIcon from "../../../../assets/social/youtube.svg";
import Vkontakte from "../../../../assets/social/Vkontakte.svg";
import InstagramIcon from "../../../../assets/social/Instagram.svg";
import AvatarIcon from "../../../../assets/img/avatar.svg";
import ClipboardIcon from "../../../../assets/img/clipboard.svg";
import ScissorsIcon from "../../../../assets/img/scissors.svg";
import TricolorIcon from "../../../../assets/img/tricolor.svg";
import { useHeaderTopStyled } from "./style";

const HeaderTop = () => {
  const {
    HeaderTopWrapSC,
    HeaderTopLeftWrapSC,
    HeaderTopNumberSC,
    HeaderTopMailSC,
    HeaderTopCenterWrapSC,
    HeaderTopSocialSC,
    HeaderTopInputSC,
    HeaderTopRightWrapSC,
    HeaderTopElemSC,
  } = useHeaderTopStyled();

  return (
    <HeaderTopWrapSC>
      <HeaderTopLeftWrapSC>
        <HeaderTopNumberSC>
          <h5>+7 (912) 799-69-80</h5>
        </HeaderTopNumberSC>
        <HeaderTopMailSC>
          <h5>info@gmail.com</h5>
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
            <h5>Кабинет клиента</h5>
          </HeaderTopElemSC>
          <HeaderTopElemSC>
            <ClipboardIcon />
            <h5>Кабинет мастера</h5>
          </HeaderTopElemSC>
          <HeaderTopElemSC>
            <ScissorsIcon />
            <h5>Онлайн-запись</h5>
          </HeaderTopElemSC>
        </HeaderTopInputSC>
      </HeaderTopCenterWrapSC>
      <HeaderTopRightWrapSC>
        <HeaderTopElemSC>
          <TricolorIcon />
          <h5>Язык</h5>
        </HeaderTopElemSC>
      </HeaderTopRightWrapSC>
    </HeaderTopWrapSC>
  );
};

export default React.memo(HeaderTop);
