import "./Works.css";
import "../../styles.css";
import { motion } from "framer-motion";

export default function Works() {
  const Upwork =
    "https://cdn.icon-icons.com/icons2/2648/PNG/512/logo_upwork_square_icon_160814.png";
  const Fiverr = "https://seekicon.com/free-icon-download/fiverr-circle_1.svg";
  const Amazon =
    "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x313.png";
  const Shopify =
    "https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png";
  const Facebook =
    "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png";
  return (
    <>
      <div className="works">
        <div className="awesome">
          <span>Worked for all these</span>
          <span> Brands & Clients</span>
          <spane>
            This is just random text which I will be replacing once I am done
            <br />
            with this portfolio tutorials.
            <br />
            <br />I am really greateful to god. The way he treats me is his way
            <br />
            to doing good things.
            <br />
          </spane>
          <button className="button">Hire Me </button>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        <div className="w-right-side">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div classname="w-secCircle">
              <img className="upwork" src={Upwork} alt="upwork" />
            </div>
            <div classname="w-secCircle">
              <img src={Fiverr} alt="Fiverr" />
            </div>
            <div classname="w-secCircle">
              <img src={Amazon} alt="Amazon" />
            </div>
            <div classname="w-secCircle">
              <img src={Shopify} alt="Shopify" />
            </div>
            <div classname="w-secCircle f-circle">
              <img src={Facebook} alt="Facebook" />
            </div>
          </motion.div>

          <div className="w-backCircle  blueCircle"> </div>
          <div className="w-backCircle  yellowCircle"></div>
        </div>
      </div>
    </>
  );
}
