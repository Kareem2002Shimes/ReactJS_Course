import { AuthContextProvider } from "../context/Auth";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </AuthContextProvider>
  );
}

export default Layout;
