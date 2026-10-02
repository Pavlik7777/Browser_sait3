import { Hero } from "../Photos"
import "../components/home_sec5.scss"
export default function Home_sec5(){
    return(
        <>
            <section className="Home_sec5">
                <div className="org">
                    <h2>Our greatest chef</h2>
                </div>
                <div className="wol">
                    <div className="wol_container">
                        <div className="be">
                            <img src={Hero.Bet} alt="" />
                            <h2>Betran Komar</h2>
                            <p>Head chef</p>
                        </div>
                        <div className="be">
                            <img src={Hero.Fer} alt="" />
                            <h2>Ferry Sauwi</h2>
                            <p>Chef</p>
                        </div>
                        <div className="be">
                            <img src={Hero.Isw} alt="" />
                            <h2>Iswan Dracho</h2>
                            <p>Chef</p>
                        </div>
                    </div>
                </div>
                <div className="bus">
                    <button>View all</button>
                </div>
            </section>
        </>
    )
}