import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

function RootLayout() {
  function Main({ children }) {
    return <div style={{ padding: 20 }}>{children}</div>;
  }

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
