import React from "react"
import {Swiper, SwiperSlide} from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss"

import {Pagination} from "swiper";

export const SimpleSlider = ({data}) => {
    const {sliderData, animation,page} = data
    return (
        <div className="easySlider">
            <Swiper
                spaceBetween={30}
                grabCursor={true}
                centeredSlides={true}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    sliderData?.map((elm, i) =>
                        <SwiperSlide key={i}>
                            <div className="items">
                                {
                                    page === "home" &&
                                    <div className="des" data-aos={animation && "fade-right"}
                                         data-aos-delay={animation && "400"}>
                                        <strong>{elm.number}</strong>
                                        <h3>{elm.textTitle}
                                        </h3>
                                        <p>{elm.text}</p>
                                    </div>
                                }
                                {
                                    page === "token" &&
                                    <div className="des" data-aos={animation && "fade-right"}
                                         data-aos-delay={animation && "400"}>
                                        <h3>{elm.textTitle.partOne}<br/><span>{elm.textTitle.partTwo}</span></h3>
                                        <span></span>
                                        <p>{elm.text}</p>
                                    </div>
                                }
                                <div className="thumb" data-aos={animation && "fade-left"}
                                     data-aos-delay={animation && "500"}>
                                    <div className="inner"><img alt="" src={elm.img}/></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default SimpleSlider