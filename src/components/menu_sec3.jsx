import { Hero } from "../Photos"
import "../components/menu_sec3.scss"
export default function Menu_sec3(){
    return(
        <>
            <section className="Home_sec3">
                <div className="ou">
                    <h1>Menu</h1>
                </div>
                <div className="all">
                    <div className="all_container">
                        <button>All catagory</button>
                        <button>Dinner</button>
                        <button>Lunch</button>
                        <button>Dessert</button>
                        <button>Drink</button>
                    </div>
                </div>
                <div className="ali">
                    <div className="ali_container">
                        <div className="ho">
                            <img src={Hero.Mask} alt="" />
                            <h2>Spaghetti</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="ho">
                            <img src={Hero.Gnoc} alt="" />
                            <h2>Gnocchi</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="ho">
                            <img src={Hero.Rovi} alt="" />
                            <h2>Rovioli</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ali">
                    <div className="ali_container">
                        <div className="ho">
                            <img src={Hero.Penn} alt="" />
                            <h2>Penne Alla Vodak</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="ho">
                            <img src={Hero.Rovi} alt="" />
                            <h2>Risoto</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                        <div className="ho">
                            <img src={Hero.Spli} alt="" />
                            <h2>Splitza Signature</h2>
                            <img src={Hero.Rat} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                adipiscing elit. Egestas consequat mi<br/>
                                eget auctor aliquam, diam. 
                            </p>
                            <div className="ord">
                                <h2>$12.05</h2>
                                <button>Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dol">
                    <div className="dol_container">
                        <button className="asd"><img src={Hero.Rec} alt="" /></button>
                        <button className="jol">1</button>
                        <button className="jol">2</button>
                        <button className="jol">3</button>
                        <p>...</p>
                        <button className="asd"><img src={Hero.Rect} alt="" /></button>
                    </div>
                </div>    
            </section>
        </>
    )
}