import NavLogo from "./assets/nav_logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <img src={NavLogo} alt="TBC x USAID logo" />
      <div>
        <ul>
          <li>მთავარი</li>
          <li>TBC IT</li>
          <li>TBC x USAID</li>
          <li>რისკები</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
