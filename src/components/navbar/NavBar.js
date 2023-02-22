import "./NavBar.css";
import "../../styles.css";
import Toggle from "../toggle/Toogle";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <>
      <div className="n-wrapper" id="NavBar">
        <div className="n-left">
          <div className="n-name">Rajat Saini</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyle: "none" }}>
              <Link
                spy={true}
                duration={100}
                to="NavBar"
                smooth={true}
                activeClass="activeClass"
              >
                <li>Home</li>{" "}
              </Link>

              <Link
                spy={true}
                to="Services"
                duration={100}
                smooth={true}
                activeClass="activeClass"
              >
                {" "}
                <li>Services</li>
              </Link>

              <Link
                spy={true}
                to="Experience"
                duration={100}
                smooth={true}
                activeClass="activeClass"
              >
                {" "}
                <li>Experience</li>
              </Link>

              <Link
                spy={true}
                to="Portfolio"
                duration={100}
                smooth={true}
                activeClass="activeClass"
              >
                <li>Portfolio</li>{" "}
              </Link>

              <Link
                spy={true}
                to="Testimonials"
                duration={100}
                smooth={true}
                activeClass="activeClass"
              >
                {" "}
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>
        </div>
        <Link
          spy={true}
          duration={100}
          to="Contact"
          smooth={true}
          activeClass="activeClass"
        >
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </>
  );
}
