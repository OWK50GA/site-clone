import H4F from '../assets/Asset-1Hack4Futo.png';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const RootLayout = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleIsClicked = () => {
        setIsClicked(!isClicked)
    }

    const navToggleIsClicked = () => {
        setIsClicked(false);
    }
    return ( 
        <div className="root-layout">
            <header>
                <nav>
                    <div className='item1'>
                        <div className='def-img'>
                            <img src={H4F} alt="Hack4FUTO" />
                        </div>
                        <div onClick={toggleIsClicked} className='menu'>
                            {/* <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon' onClick={toggleIsClicked}/> */}
                            Menu
                        </div>
                    </div>
                    <div className={!isClicked? 'navlinks': 'navlinks mobile'}>
                        <NavLink to="/" onClick={navToggleIsClicked}>Home</NavLink>
                        <NavLink to="about" onClick={navToggleIsClicked}>About Us</NavLink>
                        <NavLink to='sponsor-us' onClick={navToggleIsClicked}>Sponsor Us</NavLink>
                        <NavLink to="faq" onClick={navToggleIsClicked}>FAQ</NavLink>
                        <NavLink to="core-team" onClick={navToggleIsClicked}>Core Team</NavLink>
                    </div>
                    <div className='register'>
                        <NavLink to="register">Register</NavLink>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default RootLayout;