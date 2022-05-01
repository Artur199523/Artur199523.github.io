import React from "react"
import "./style.scss"
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";

import {Autoplay, EffectCoverflow, Pagination} from "swiper";

const Carousel3dSlider = ({data}) => {
    const {title, slideData} = data
    return (
        <div className="slider3d">
            <div className="container">
                <div className="block-caption" data-aos="fade-up">
                    <h2>{title.partOne} <span>{title.partTwo}</span></h2>
                </div>
            </div>
            <div data-aos="fade-up">
                <Swiper
                    effect={"coverflow"}
                    slidesPerView={"auto"}
                    loop={true}
                    centeredSlides={true}
                    grabCursor={true}
                    speed={600}
                    coverflowEffect={{
                        scale: 0.7,
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        320: {},
                        480: {},
                        767: {
                            coverflowEffect: {
                                depth: 500,
                            }
                        }
                    }}
                    autoplay={{
                        delay: 4000,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        slideData?.map((elm, i) =>
                            <SwiperSlide key={i}>
                                <div className="mode-item">
                                    <div className="thumb">
                                        <img alt="" src={`${elm.img}`}/>
                                    </div>
                                    <div className="des">
                                        {elm.text}
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel3dSlider