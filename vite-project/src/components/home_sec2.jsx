import { Hero } from "../Photos";
import "../components/home_sec2.scss"
export default function Home_sec2(){
    return(
        <>
            <section className="Home_sec2">
                <div className="ser">
                    <div className="ser_container">
                        <div className="pic">
                            <img src={Hero.Pic} alt="" />
                        </div>
                        <div className="tal">
                            <h2>Welcome to<br/>
                                <span>delizioso</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Facilisis ultricies at eleifend<br/>
                                proin. Congue nibh nulla malesuada<br/>
                                ultricies nec quam 
                            </p>
                            <div className="see">
                                <button className="tub">See our menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}