import { FC, ReactNode } from "react";
import Header from "../Header";
import { LayoutWrapper, MainContent } from "./styles";

interface IChildrenType {
  children: ReactNode;
}

const Layout: FC<IChildrenType> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
