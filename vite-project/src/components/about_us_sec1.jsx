import { Hero } from "../Photos";
import "../components/about_us_sec1.scss"
export default function About_us_sec1(){
    return(
        <>
            <section className="About_us_sec1">
                <div className="bil">
                    <div className="bil_container">
                        <img src={Hero.Per} alt="" />
                        <div className="resp">
                            <h1><span>Our</span><br/>
                                restautant
                            </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit, sed do eiusmod tempor<br/>
                                incididunt ut labore et dolore magna<br/>
                                aliqua. Ut enim ad minim veniam, quis<br/>
                                nostrud exercitation ullamco laboris nisi ut<br/>
                                aliquip ex ea commodo consequat.<br/>
                                Duis aute irure dolor in reprehenderit in<br/>
                                voluptate velit esse.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row_container">
                        <p>Sed ut perspiciatis unde omnis iste natus<br/>
                            error sit voluptatem accusantium<br/>
                            doloremque laudantium, totam rem<br/>
                            aperiam, eaque ipsa quae ab illo inventore<br/>
                            veritatis et quasi architecto beatae vitae<br/>
                            dicta sunt explicabo. Nemo enim ipsam<br/>
                            voluptatem quia voluptas sit aspernatur aut<br/>
                            odit aut fugit.
                        </p>
                        <img src={Hero.Reo} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}