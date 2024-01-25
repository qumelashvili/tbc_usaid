import NavLogo from "./assets/nav_logo.png";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="emptyDiv"></div>{" "}
      {/* Empty div with nav height because navbar fixed position */}
      <nav className={isScrolled ? "scrolled" : ""}>
        <img src={NavLogo} alt="TBC x USAID logo" />
        <div>
          <ul>
            <li>მთავარი</li>
            <li>TBC IT</li>
            <li className="active">TBC x USAID</li>
            <li>რისკები</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
