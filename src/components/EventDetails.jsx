import Day from '../assets/day.jpg';
import Judges from '../assets/judges.jpg';
import People from '../assets/people.jpg';
import Tracks from '../assets/tracks.jpg';
import Spanner from '../assets/spanner.jpg';

const EventDetails = () => {
    return ( 
        <div className="event-details">
            <div className="event-detail">
                <img src={Tracks} alt="" />
                <div>
                    <p>5</p>
                    <p>Tracks</p>
                </div>
            </div>
            <div className="event-detail">
                <img src={Judges} alt="" />
                <div>
                    <p>3</p>
                    <p>Judges</p>
                </div>
            </div>
            <div className="event-detail">
                <img src={Spanner} alt="" />
                <div>
                    <p>3</p>
                    <p>Workshops</p>
                </div>
            </div>
            <div className="event-detail">
                <img src={Day} alt="" />
                <div>
                    <p>1</p>
                    <p>Day</p>
                </div>
            </div>
            <div className="event-detail">
                <img src={People} alt="" />
                <div>
                    <p>1,000+</p>
                    <p>Tech Enthusiasts</p>
                </div>
            </div>
        </div>
     );
}
 
export default EventDetails;