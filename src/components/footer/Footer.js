import "./Footer.css";
import "../../styles.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksgkFCUovJ1-U6zmSGn2lQB5y6xdWKJhL-k3O1C-31yX8sSP4cTJHmrGCQjSZsAav73U&usqp=CAU"
          alt="footer Wave Image"
          style={{ width: "100%" }}
        />

        <div className="f-content">
          <span>RajatSaini@gmail.com </span>
          <div className="f-icons">
            <Insta color="white" size="3rem" />
            <Facebook color="white" size="3rem" />
            <Github color="white" size="3rem" />
          </div>
        </div>
      </div>
    </>
  );
}
