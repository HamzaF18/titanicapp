import "./Help.css" 

 
 

const Help=()=>{ 

    return( 

        <div className="background-image"> 
        <div className="help">
            <div className="help-title">
                <h1>Titanic Fitness Help Centre</h1>
            </div>
            <br></br>
            <div className="help-buttons">
                <button>How can i cancel my membership?</button>
                <button>How can i freeze my membership?</button>
                <button>Are all the gyms open 24/7?</button>
            </div>
            <br></br>
            <div className="help-text">
                <p>"At Titanic Fitness, we prioritize our members' convenience and aim to provide solutions to your queries or concerns. If you encounter any issues or have questions regarding your membership, our customer service team is readily available to assist you. Our website features specific buttons designed to address common concerns: 'Freeze Membership,' 'Gym Hours,' and 'Cancellation Policy.' The 'Freeze Membership' button allows you to conveniently pause your membership when needed, offering flexibility during unexpected circumstances. We want to ensure your convenience, but please note that our gym operates within specified hours, and while we aim to accommodate varied schedules, we are not a 24/7 facility. If you're considering cancelling your membership, our 'Cancellation Policy' button provides information and guidance on the process. Feel free to reach out to our support team for any further assistance or inquiries. Your satisfaction and ease with our services are of utmost importance to us.</p>
            </div>
        </div> 
        </div> 

    ) 

} 

export default Help;
