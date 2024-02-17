import H4F from '../assets/Asset-1Hack4Futo.png';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <nav>
                    <div className='def-img'>
                        <img src={H4F} alt="Hack4FUTO" />
                    </div>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About Us</NavLink>
                        <NavLink to='sponsor-us'>Sponsor Us</NavLink>
                        <NavLink to="faq">FAQ</NavLink>
                        <NavLink to="core-team">Core Team</NavLink>
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