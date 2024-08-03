import * as Icon from 'react-bootstrap-icons'
import { useRef } from 'react'
import '../App.css'
const Navbar=()=>{
    const menuRef = useRef()
    function toggleMenu(){
        menuRef.current.classList.toggle('toggle-menu')
    }
    return(
        <header>
            <nav className="header-menu" ref={menuRef}>
                <ul>
                    <li className="close-menu" onClick={toggleMenu} ><Icon.X /></li>
                    <li>BUY T-SHIRTS</li>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
            <h1 className="logo">BeBOLD</h1>
            <ul className="header-icons">
                <ul>
                    <li className='header-search'><Icon.Search /></li>
                    <li className='header-price'>$0.00</li>
                    <li className='header-cart'><Icon.Basket /></li>
                    <li className='header-login'>LOGIN</li>
                </ul>
            </ul>
            <h2 className='menu-icon' onClick={toggleMenu}><Icon.List /></h2>
        </header>
    )
}
export default Navbar