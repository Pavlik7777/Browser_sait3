import { Hero } from "../Photos"
import { useState, useEffect } from "react";
import "../components/home_sec3.scss"
const items = [
  { id: 1, title: "Spaghetti", price: "$12.05", img: "/src/assets/Mask.png", category: "dinner" },
  { id: 2, title: "Gnocchi", price: "$12.05", img: "/src/assets/Gnoc.png", category: "lunch" },
  { id: 3, title: "Rovioli", price: "$12.05", img: "/src/assets/Rovi.png", category: "lunch" },
  { id: 4, title: "Penne Alla Vodak", price: "$12.05", img: "/src/assets/Penn.png", category: ["dinner","drink"] },
  { id: 5, title: "Risoto", price: "$12.05", img: "/src/assets/Rovi.png", category: "lunch" },
  { id: 6, title: "Splitza Signature", price: "$12.05", img: "/src/assets/Spli.png", category: ["dinner","desert"] },
];

export default function Home_sec3(){
    const [activeTab, setActiveTab] = useState("all");
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
    if (activeTab === "all") {
      setVisibleItems(items);
    } else {
      setVisibleItems(items.filter(item => item.category.includes(activeTab)));
    }
  }, [activeTab]);
    return(
        <>
            <section className="Home_sec3">
                <div className="ou">
                    <h1>Our popular menu</h1>
                </div>
                <div className="all">
                    <div className="all_container">
                        <button onClick={() => setActiveTab("all")}className="pol" >All catagory</button>
                        <button onClick={() => setActiveTab("dinner")} className="pol" >Dinner</button>
                        <button onClick={() => setActiveTab("lunch")} className="pol" >Lunch</button>
                        <button onClick={() => setActiveTab("desert")} className="pol" >Dessert</button>
                        <button onClick={() => setActiveTab("drink")} className="pol" >Drink</button>
                    </div>
                </div>
                <div className="ala">
                    <div className="ala_container">
                        {visibleItems.map(item =>(
                            <div className="ho" key={item.id}>
                                <img src={item.img} alt="" />
                                <h2>{item.title}</h2>
                                <img src={Hero.Rat} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur<br/>
                                    adipiscing elit. Egestas consequat mi<br/>
                                    eget auctor aliquam, diam. 
                                </p>
                                <div className="ord">
                                    <h2>{item.price}</h2>
                                    <button>Order now</button>
                                </div>
                            </div>
                        ))}
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