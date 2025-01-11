import { Outlet } from "react-router-dom";
import "../styles/firstcss.css";
import Footer from "./footer";
import Header from "./header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
