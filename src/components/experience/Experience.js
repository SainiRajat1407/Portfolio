import "./Experience.css";
import "../../styles.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

export default function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="experience" id="Experience">
        <div className="achievement">
          <span
            className="circle"
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : ""
            }}
          >
            8+
          </span>
          <span>years</span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <span
            className="circle"
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : ""
            }}
          >
            20+
          </span>
          <span>Completed</span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <span
            className="circle"
            style={{
              background: darkMode ? "black" : "",
              color: darkMode ? "white" : ""
            }}
          >
            5+
          </span>
          <span>Companies</span>
          <span>Worked </span>
        </div>
      </div>
    </>
  );
}
