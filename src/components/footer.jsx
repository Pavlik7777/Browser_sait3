import { Hero } from "../Photos"
import "../components/footer.scss"
export default function Footer(){
    return(
        <>
            <section className="Footer">
                <div className="kol">
                    <div className="kol_container">
                        <div className="vir">
                            <img src={Hero.Lodo} alt="" />
                            <p>Viverra gravida morbi egestas<br/>
                                facilisis tortor netus non duis<br/>
                                tempor.
                            </p>
                            <div className="imm">
                                <img src={Hero.Twit} alt="" />
                                <img src={Hero.Inst} alt="" />
                                <img src={Hero.Face} alt="" />
                            </div>
                        </div>
                        <div className="lao">
                            <h2>Page</h2>
                            <ul>
                                <li>Home</li>
                                <li>Menu</li>
                                <li>Order online</li>
                                <li>Catering</li>
                                <li>Reservation</li>
                            </ul>
                        </div>
                        <div className="lao">
                            <h2>Information</h2>
                            <ul>
                                <li>About us</li>
                                <li>Testimonial</li>
                                <li>Event</li>
                            </ul>
                        </div>
                        <div className="lao">
                            <h2>Get in touch</h2>
                            <ul>
                                <li>3247 Johnson Ave, Bronx, NY<br/>
                                    10463, Amerika Serikat
                                </li>
                                <li>delizioso@gmail.com</li>
                                <li>+123 4567 8901</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy">
                    <p>Copyright 2022 Delizioso</p>
                </div>
            </section>
        </>
    )
}