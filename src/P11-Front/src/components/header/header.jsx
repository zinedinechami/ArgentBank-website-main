import "./header.css";
import header_logo from "./argentBankLogo.png";

export default function Header() {
  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={header_logo}
            alt="Argent Bank Logo"
          />
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    </>
  );
}
