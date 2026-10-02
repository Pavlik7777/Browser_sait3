import { Hero } from "../Photos";
import "../components/about_us_sec2.scss"
export default function About_us_sec2(){
    return(
        <>
            <section className="About_us_sec2">
                <div className="gla">
                    <div className="gla_container">
                        <img src={Hero.Bro} alt="" />
                        <div className="own">
                            <h2><span>Owner</span>&<br/>
                                Executive Chef
                            </h2>
                            <h3>Ismail Marzuki</h3>
                            <p>Lorem ipsum dolor sit amet,<br/>
                                consectetur adipiscing elit, sed<br/>
                                do eiusmod tempor incididunt ut<br/>
                                labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}