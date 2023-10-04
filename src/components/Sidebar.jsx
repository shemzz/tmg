import logo from '../assets/logo.png';

function SideBar({ openSidebarToggle}) {
    return (
        <aside id="sidebar" className={openSidebarToggle? "sidebar-open" : ""} >
            <div className="sidebar_header">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Profile</li>
                    <li>Change Password</li>
                    <li>Logout</li>
                </ul>
            </div>
        </aside>
    );

}
export default SideBar;