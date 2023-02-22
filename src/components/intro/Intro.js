import "../../styles.css";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

export default function Intro() {
  const transition = { duration: 2, type: "spring" };
  const imageSource1 =
    "https://img.freepik.com/premium-photo/gold-yellow-royal-king-crown-icon-cartoon-minimal-style-cute-smooth-pink-background-with-leadership-emperor-concept-3d-render-illustration_598821-841.jpg?w=1060";
  const imageSource2 =
    "https://atlas-content1-cdn.pixelsquid.com/assets_v2/244/2448838043956679764/jpeg-600/G03.jpg";
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hi, I Am</span>
            <span>Rajat Saini</span>
            <span>
              Front end developer with high level of experience in web designing
              and development, producing the quality work.
            </span>
          </div>
          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <img
              src="data:image/png;base64,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"
              alt="githubicon"
            />
            <img
              src="data:image/png;base64,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"
              alt="linkedIn icon"
            />
            <img
              src="https://www.pngkey.com/png/full/77-779402_instagram-icon-psd102121-blue-instagram-logo-png.png"
              alt="instagram"
            />
          </div>
        </div>

        <div className="i-right">
          <img
            className="image1"
            src="https://static.vecteezy.com/system/resources/previews/003/838/436/non_2x/portrait-of-asian-man-surprised-with-confused-and-displeased-expression-on-yellow-background-free-photo.jpg"
          />
          <motion.img
            initial={{ left: "-26%" }}
            whileInView={{ left: "-4%" }}
            transition={transition}
            className="image2"
            src="https://www.getillustrations.com/packs/3d-emoji-illustrations-icons/scenes/_1x/Emoji%20_%20emoticon,%20emoji,%20sticker,%20face,%20sunglasses,%20cool,%20style,%20center_sm.png"
          />
          <motion.div
            initial={{ left: "76%" }}
            whileInView={{ left: "58%" }}
            transition={transition}
            className="floatingdiv floatingDiv1"
          >
            <FloatingDiv
              text1="Web"
              text2="Developer"
              imageSource={imageSource1}
            />
          </motion.div>
          <motion.div
            initial={{ left: "76%" }}
            whileInView={{ left: "58%" }}
            transition={transition}
            className="floatingdiv floatingDiv2"
          >
            <FloatingDiv
              text1="Best Design"
              text2="Award"
              imageSource={imageSource1}
            />
          </motion.div>

          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              left: "-9rem",
              height: "11rem",
              width: "21rem"
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
