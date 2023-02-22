import "./Services.css";
import "../../styles.css";
import Card from "../card/Card";
import { motion } from "framer-motion";

export default function Services() {
  const transition = { duration: 2, type: "spring" };
  const heartEmoji =
    "https://www.dictionary.com/e/wp-content/uploads/2018/12/20200713_yellowHeart_800x800-300x300.png";
  return (
    <>
      <div className="services" id="Services">
        <div className="awesome">
          <span>My Awesome </span>
          <span> Services</span>
          <spane>
            This is just random text which I will be replacing once I am done
            with this portfolio tutorials.
            <br />I am really greateful to god. The way he treats me is his way
            to doing good things.
          </spane>

          <button className="button s-button">Download CV </button>
          <div
            className="blur s-blur"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        <div className="cards">
          <motion.div
            initial={{ left: "-56%" }}
            whileInView={{ left: "-30%" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={heartEmoji}
              heading={"Design"}
              detail={"HTML, CSS, JavaScript, React"}
            ></Card>{" "}
          </motion.div>

          <motion.div
            initial={{ left: "66%" }}
            whileInView={{ left: "40%" }}
            transition={transition}
            style={{ left: "-4rem", top: "12rem" }}
          >
            <Card
              emoji={heartEmoji}
              heading={"Developer"}
              detail={"HTML, CSS, JavaScript, React"}
            ></Card>{" "}
          </motion.div>

          <motion.div
            initial={{ left: "-56%" }}
            whileInView={{ left: "-25%" }}
            transition={transition}
            style={{ left: "12rem", top: "19rem" }}
          >
            <Card
              emoji={heartEmoji}
              heading={"Humble"}
              detail={"HTML, CSS, JavaScript, React"}
            ></Card>
          </motion.div>
          <div
            className="blur s-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </>
  );
}
