import Person1 from '../assets/person1.jpg'
import Person2 from '../assets/person2.jpg'
import Person3 from '../assets/person3.jpg'
import Person4 from '../assets/person4.jpg'
import Person5 from '../assets/person5.jpg'
import Person6 from '../assets/person6.jpg'
import Person7 from '../assets/person7.jpg'
import Person8 from '../assets/person8.jpg'
import Person9 from '../assets/person9.jpg'
import Person10 from '../assets/person10.jpg'
import Person11 from '../assets/person11.jpg'
import Person12 from '../assets/person12.jpg'

const CoreTeam = () => {
    return ( 
        <div className="core-team">
            <div className="core-team-title">
                <h2>Core Team</h2>
            </div>
            <div className="core-team-members">
                <div className="core-team-member">
                    <img src={Person1} alt="Person1" />
                    <div>
                        <p>Ken Adams</p>
                        <p className='red'>Co-convener</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person2} alt="Person2" />
                    <div>
                        <p>Michael Taylor</p>
                        <p className='red'>Speaker Management</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person3} alt="Person3" />
                    <div>
                        <p>Marcus Williams</p>
                        <p className='red'>Project Manager</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person4} alt="Person4" />
                    <div>
                        <p>David Smith</p>
                        <p className='red'>Logistics</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person5} alt="Person5" />
                    <div>
                        <p>Christopher Greene</p>
                        <p className='red'>Operations</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person6} alt="Person6" />
                    <div>
                        <p>Jordan Garcia</p>
                        <p className='red'>Technical Adviser</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person7} alt="Person7" />
                    <div>
                        <p>Daniel Martinez</p>
                        <p className='red'>Social Media/Comms</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person8} alt="Person8" />
                    <div>
                        <p>Matthew Johnson</p>
                        <p className='red'>Logistics</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person9} alt="Person9" />
                    <div>
                        <p>Alex Rodriguez</p>
                        <p className='red'>Design</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person10} alt="Person10" />
                    <div>
                        <p>Larney Stinson</p>
                        <p className='red'>Project Manager</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person11} alt="Person11" />
                    <div>
                        <p>Sarah Black</p>
                        <p className='red'>Protocol</p>
                    </div>
                </div>
                <div className="core-team-member">
                    <img src={Person12} alt="Person12" />
                    <div>
                        <p>Laura Thompson</p>
                        <p className='red'>Protocol</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CoreTeam;