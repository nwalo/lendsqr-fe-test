import React from "react";
import "./Layout.scss";
import Navigation from "../components/Navigation";
import SideNav from "../components/SideNav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navigation />
      <SideNav>{children}</SideNav>
    </div>
  );
};

export default Layout;
