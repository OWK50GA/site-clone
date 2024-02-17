import { NavLink } from "react-router-dom";
import HomeText from "../components/HomeText";
import EventInfo from "../components/EventInfo";

const Home = () => {
    return ( 
        <div>
            <HomeText />
            <EventInfo />
        </div>
     );
}
 
export default Home;