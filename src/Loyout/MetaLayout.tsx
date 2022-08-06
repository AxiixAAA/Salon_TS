import React from "react";
import Head from "next/head";

interface IMetaLayoutProps {
  title: string;
  children: React.ReactNode;
}

const MetaLayout = ({ children, title = "" }: IMetaLayoutProps) => {
  return (
    <>
      <Head>
        <title>KVIK {title}</title>
      </Head>
      {children}
    </>
  );
};

export default React.memo(MetaLayout);