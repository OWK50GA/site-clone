const Faq = () => {
    return ( 
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                <div className="question">
                    <details>
                        <summary>Is registering for the hackathon free?</summary>
                        <p>Yes, no amount is paid.</p>
                    </details>
                </div>
                <div className="question">
                    <details>
                        <summary>Is this a Hackathon or a conference?</summary>
                        <p>Its both. Planned and spiced for you</p>
                    </details>
                </div>
                <div className="question">
                    <details>
                        <summary>Are teams needed for the Hackathon?</summary>
                        <p>Yes, you must be in a team, a minimum of 4 and a maximum of 6 people in teams. 
                            Should Include code and No-code team members ( should have a PM, Technical writier
                            designer and developer and any other 2 members)</p>
                    </details>
                </div>
                <div className="question">
                    <details>
                        <summary>Must I be a FUTO student to apply for the Hackathon prize?</summary>
                        <p>Yes, it’s Hack4FUTO for Futo students alone.</p>
                    </details>
                </div>
                <div className="question">
                    <details>
                        <summary>Do I have to be a FUTO student to attend the main event?</summary>
                        <p>No, it’s opened to world.</p>
                    </details>
                </div>
            </div>
        </div>
     );
}
 
export default Faq;