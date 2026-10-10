import { Link } from "react-router-dom"
import { Hero } from "../Photos"
import "../Header/header.scss"
export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <img className="lio" src={Hero.Logo} alt="" />
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Page2'>Menu</Link></li>
                        <li><Link to='/Page3'>About us</Link></li>
                        <li><Link>Order online</Link></li>
                        <li><Link>Reservation</Link></li>
                        <li><Link>Contact us</Link></li>
                    </ul>
                    <div className="cat">
                        <img src={Hero.Cart} alt="" />
                        <button>Log in</button>
                    </div>
                </nav>
            </header>
        </>
    )
}