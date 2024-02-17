import Calendar from '../assets/calendar.jpg';
import Location from '../assets/location.jpg';
import Clock from '../assets/clock.jpg';

const EventInfo = () => {
    return ( 
        <div className="event-info">
            <div className="event-info-piece">
            <img src={Calendar}/>
                <div>
                    <p>Date</p>
                    <p>Saturday, 2nd March 2024</p>
                </div>
            </div>
            <div className="event-info-piece">
            <img src={Location}/>
                <div>
                    <p>Venue</p>
                    <p>MCE Lecture Hall 1</p>
                </div>
            </div>
            <div className="event-info-piece">
            <img src={Clock}/>
                <div>
                    <p>Time</p>
                    <p>10:00am</p>
                </div>
            </div>
        </div>
     );
}
 
export default EventInfo;