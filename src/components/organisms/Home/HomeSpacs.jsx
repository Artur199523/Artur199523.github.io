import React, {useState} from "react";
import Button from "../../atoms/Button";

const HomeSpacs = () =>{
    const [show,setShow] = useState(false)
    const showHiddenItem = () =>{
        setShow(!show)
    }

    return(
        <section className="home-block home-specs">
            <div className="how-one">
                <div className="container">
                    <div className="block-caption" data-aos="fade-up" data-aos-delay="400">
                        <h2>tech <span>specs</span></h2>
                    </div>
                    <div className="specs-wrap" data-aos="fade-right" data-aos-delay="400">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="specs-detail">
                                    <h3>PC minimum specifications</h3>
                                    <div className="item">
                                        <label>Operating system</label>
                                        <p>Windows 10 64-bit</p>
                                    </div>
                                    <div className="item">
                                        <label>CPU</label>
                                        <p>Intel Core i3-4340 or AMD FX-6300</p>
                                    </div>
                                    <div className="item">
                                        <label>RAM</label>
                                        <p>4 GB RAM</p>
                                    </div>
                                    <div className="item">
                                        <label>HDD</label>
                                        <p>TBA</p>
                                    </div>
                                    <div className="item">
                                        <label>Video</label>
                                        <p>NVIDIA GeForce GTX 670 / Intel HD 4000</p>
                                    </div>
                                    <div className="item">
                                        <label>direct x</label>
                                        <p>DirectX 10 compatible system</p>
                                    </div>
                                    <div className="item">
                                        <label>network</label>
                                        <p>Broadband Internet connection</p>
                                    </div>
                                    <div className="item">
                                        <label>sound card</label>
                                        <p>DirectX Compatible</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className={`specs-detail   specs-detail-right specs-detail-mobile ${show ? "showItems":""}`}>
                                    <h3>PC recommended specifications</h3>
                                    <div className="item">
                                        <label>Operating system</label>
                                        <p>Windows 11 64-bit (latest update)</p>
                                    </div>
                                    <div className="item">
                                        <label>CPU</label>
                                        <p>Intel Core i5-2500K or AMD Ryzen R5 1600X processor</p>
                                    </div>
                                    <div className="item">
                                        <label>RAM</label>
                                        <p>12 GB RAM</p>
                                    </div>
                                    <div className="item">
                                        <label>HDD</label>
                                        <p>TBA</p>
                                    </div>
                                    <div className="item">
                                        <label>Video</label>
                                        <p>NVIDIA GeForce GTX 970 / GeForce GTX 1660 or Radeon R9 390 / AMD RX 580</p>
                                    </div>
                                    <div className="item">
                                        <label>direct x</label>
                                        <p>DirectX 12 compatible system</p>
                                    </div>
                                    <div className="item">
                                        <label>network</label>
                                        <p>Broadband Internet connection</p>
                                    </div>
                                    <div className="item">
                                        <label>sound card</label>
                                        <p>DirectX Compatible</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className={`specs-detail specs-detail-mobile ${show ? "showItems":""}`}>
                                    <h3>MOBILE minimum specifications</h3>
                                    <div className="item">
                                        <label>device</label>
                                        <p>iPhone 8, Samsung Galaxy S9</p>
                                    </div>
                                    <div className="item">
                                        <label>Operating system</label>
                                        <p>iOS 13, Android 8</p>
                                    </div>

                                    <div className="item">
                                        <label>RAM</label>
                                        <p>2 GB RAM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="specs-detail specs-detail-right  specs-detail-mobile">
                                    <h3>mobile recommended specifications</h3>
                                    <div className="item">
                                        <label>device</label>
                                        <p>iPhone 12, Samsung Galaxy S10</p>
                                    </div>
                                    <div className="item">
                                        <label>Operating system</label>
                                        <p>iOS 13, Android 8</p>
                                    </div>

                                    <div className="item">
                                        <label>RAM</label>
                                        <p>2 GB RAM</p>
                                    </div>
                                </div>
                                <div className="show-all">
                                    <Button onClick={showHiddenItem} type={"gold"} text={`${show?"hide specs" : "show all specs"}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeSpacs