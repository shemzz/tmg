import { useState } from "react";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import SideBar from "../components/Sidebar";



function AuthLayout() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const handleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

  return (
      <div className="grid-container">
        <Header handleSidebar={handleSidebar} />
        <SideBar setOpenSidebar={setOpenSidebar} />
        <Dashboard />
    </div>
  );
}
export default AuthLayout;