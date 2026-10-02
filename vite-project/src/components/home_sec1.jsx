import { Hero } from "../Photos";
import "../components/home_sec1.scss"
export default function Home_sec1(){
    return(
        <>
            <section className="home_sec1">
                <div className="res">
                    <div className="res_container">
                        <div className="it">
                            <button className="rest">Restauran</button>
                            <h2>Italian<br/>
                                Cuisine
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                                elit. Sodales senectus dictum arcu sit tristique<br/>
                                donec eget.
                            </p>
                            <div className="orre">
                                <button className="but1">Order now</button>
                                <button className="but2">Reservation</button>
                            </div>
                        </div>
                        <div className="ill">
                            <img src={Hero.Ill} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}