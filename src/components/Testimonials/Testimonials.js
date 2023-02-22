import "./Testimonials.css";
import "../../styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default function Testimonials() {
  const profilePic1 =
    "https://miro.medium.com/v2/resize:fit:720/1*t_G1kZwKv0p2arQCgYG7IQ.gif";
  const clients = [
    {
      img: { profilePic1 },
      review:
        "This is some of the random text that I am placing right now and I will replace it once I get the chance"
    },
    {
      img: { profilePic1 },
      review:
        "This is some of the random text that I am placing right now and I will replace it once I get the chance"
    },
    {
      img: { profilePic1 },
      review:
        "This is some of the random text that I am placing right now and I will replace it once I get the chance"
    },
    {
      img: { profilePic1 },
      review:
        "This is some of the random text that I am placing right now and I will replace it once I get the chance"
    }
  ];
  return (
    <>
      <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
          <span> Clients always get </span>
          <span> Exceptional Work </span>
          <span> From me... </span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {clients.map((client, key) => {
            return (
              <SwiperSlide>
                <div className="parent-testimonial">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:720/1*t_G1kZwKv0p2arQCgYG7IQ.gif"
                    alt="client image"
                  />
                  <br />
                  <span> {client.review} </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
