import "./Footer.css";
import FooterLogo from "./assets/footer_logo.png";
import FbLogo from "./assets/fb_logo.png";
import YtLogo from "./assets/yt_logo.png";

function Footer() {
  return (
    <footer>
      <div>
        <img src={FooterLogo} alt="თიბისი" />

        <ul>
          <li>© 2023 ყველა უფლება დაცულია</li>
          <li>წესები და პირობები</li>
        </ul>
      </div>

      <div className="footerLinks">
        <div className="footerIcons">
          <img src={FbLogo} alt="Facebook logo" />
          <img src={YtLogo} alt="Youtube logo" />
        </div>
        <button>მოგვწერეთ</button>
      </div>
    </footer>
  );
}

export default Footer;
