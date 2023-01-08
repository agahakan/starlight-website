import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() =>  {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo' src={require('../img/Logo.png')} alt='logo' />
                        STARLIGHT
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="solutions" spy={true} smooth={true} offset={-200} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Solutions
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="produits" spy={true} smooth={true} offset={-100} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Produits
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="services" spy={true} smooth={true} offset={50} duration={500} className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar