import "../components/home_sec7.scss"
import { Hero } from "../Photos"
export default function Home_sec7(){
    return(
        <>
            <section className="Home_sec7">
                <div className="gol">
                    <div className="gol_container">
                        <h2>we are open from</h2>
                        <p>Monday-Sunday</p>
                        <h3>Launch : Mon-Sun : 11:00am-02:00pm</h3>
                        <h3>Dinner : sunday : 04:00pm-08:00pm</h3>
                        <h3 className="pm">04:00pm-09:00pm</h3>
                        <div className="sero">
                            <button className="now">Order now</button>
                            <button className="rese">Reservation</button>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}