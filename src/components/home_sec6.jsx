import { Hero } from "../Photos"
import "../components/home_sec6.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,  Keyboard } from 'swiper/modules';
export default function Home_sec6(){
    return(
        <>
            <section className="Home_sec6">
                <div className="cus">
                    <h2>Our customers say</h2>
                </div>
                <Swiper
                    navigation={false}
                    keyboard={true}
                    initialSlide={3}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Geil} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Elli} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Lili} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Star} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Boy} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Bia} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="has">
                            <img className="star" src={Hero.Bola} alt="" />
                            <h2>Starla Virgoun</h2>
                            <p className="fin">Financial advisor</p>
                            <div className="as">
                                <img className="cav" src={Hero.Cav} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                    elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                                    nulla malesuada ultricies nec quam 
                                </p>
                                <img className="cavt" src={Hero.Cavt} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
               
                <div className="us">
                    <img src={Hero.User} alt="" />
                </div>
            </section>
        </>
    )
}