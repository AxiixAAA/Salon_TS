import React, { FC } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import Footer from "@/components/AnyPage/Footer/Footer";
// import { Provider } from "react-redux";
// import { store } from "@/store/index";
// import Theme from "../theme/Theme";
// import AppModal from "@/components/AnyPage/AppModal/AppModal";
// import Header from "@/components/AnyPage/Header/Header";
// import UserInit from "@/components/../init/UserInit/UserInit";
// import ScriptsInit from "../init/ScriptsInit/ScriptsInit";
// import CategoryInit from "../init/CategoryInit/CategoryInit";
// import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
    // <ErrorBoundary>
    //   <Provider store={store}>
    //     <Theme>
    //       <Header />
    //       <main>{children}</main>
    //       <Footer />
    //       <AppModal />
    //     </Theme>
    //     <>
    //       <UserInit />
    //       <CategoryInit />
    //       <ScriptsInit />
    //     </>
    //   </Provider>
    // </ErrorBoundary>
  );
};
