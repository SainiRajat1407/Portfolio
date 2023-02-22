import "./Portfolio.css";
import "../../styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Experience() {
  const placeholderImage = "https://via.placeholder.com/600";
  return (
    <>
      <div className="portfolio">
        <span> Recent Projects </span>
        <span> Portfolio </span>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          grabCursor={true}
          clsssName="swiper-slider"
        >
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/237/536/354"
              alt="project image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/237/536/354"
              alt="project image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/237/536/354"
              alt="project image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/237/536/354"
              alt="project image"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
