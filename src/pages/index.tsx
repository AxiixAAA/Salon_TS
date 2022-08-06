import React from "react";
import type { NextPage } from "next";
import HeaderMain from "../components/Header/HeaderMain/HeaderMain";
import Theme from "../theme/Theme";
import AuthPage from "../components/AuthPage/Auth";

const Home: NextPage = () => {
  return (
    <>
      <Theme>
        <HeaderMain />
        <AuthPage />
      </Theme>
    </>
  );
};

export default Home;
