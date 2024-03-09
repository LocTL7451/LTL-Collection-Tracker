import AnimatedHorizontalPage from "../components/horizontal.page.component";
import React from "react";
export const metadata = {
  title: "LTL - Contact",
  description: "Contact Page",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedHorizontalPage>
      <main>{children}</main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
