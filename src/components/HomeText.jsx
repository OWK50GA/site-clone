import { NavLink } from "react-router-dom";

const HomeText = () => {
    return ( 
        <div>
            <div className="home">
                <div>
                    <p className="h4f">#Hack4FUTO</p>
                    <p>Solving Students problems using Technology</p>
                </div>
                <div>
                    <p>Bring your stacks to life and make your mark on the future software development.</p>
                </div>
                <div className="home-text-links">
                    <NavLink to="register" className='home-text-link-1'>Register</NavLink>
                    <NavLink to="sponsor-us" className='home-text-link-2'>Be a Sponsor</NavLink>
                </div>
            </div>
        </div>
     );
}
 
export default HomeText;