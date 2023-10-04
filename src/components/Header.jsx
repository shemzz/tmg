import { BsJustify, BsXCircle } from "react-icons/bs";

function Header({OpenSidebar}) {
    return (
        <header className="header">
        <div className="menu-icon">
          <h4>Hi - { OpenSidebar}</h4>
          {OpenSidebar ? <BsXCircle className="icon" onClick={OpenSidebar} /> :
            <BsJustify className="icon" onClick={OpenSidebar} />
          }
            </div>
     </header>
  );
}
export default Header;