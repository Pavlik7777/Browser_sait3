import { Hero } from "../Photos"
import "../components/home_sec6.scss"
export default function Home_sec6(){
    return(
        <>
            <section className="Home_sec6">
                <div className="cus">
                    <h2>Our customers say</h2>
                </div>
                <div className="has">
                    <img src={Hero.Star} alt="" />
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
                <div className="us">
                    <img src={Hero.User} alt="" />
                </div>
            </section>
        </>
    )
}