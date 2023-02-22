import "./FloatingDiv.css";
import "../../styles.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function FloatingDiv({ text1, text2, imageSource }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="floatingdiv">
        <img src={imageSource} alt="crown image" width="80px" />
        <span>
          <span style={{ color: darkMode ? "black" : "" }}>{text1}</span> <br />{" "}
          <span style={{ color: darkMode ? "black" : "" }}>{text2}</span>
        </span>
      </div>
    </>
  );
}
