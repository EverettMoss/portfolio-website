import React from "react";

function TopSummary(props) {
    //CONSTANTS
    const MS_TO_MINUTES = 60000
    const MS_TO_DAYS = 86400000

    return (
        <>
            <div>
                <p className="font-light pl-5">You spent <span className="font-bold text-lg">{ Math.round((props.data.time / MS_TO_DAYS) * 100) / 100 }</span> days listening to music (<span className="font-bold text-lg">{ (Math.round((props.data.time/MS_TO_MINUTES) * 100) / 100).toLocaleString() }</span> minutes). </p>
                <p className="font-light pl-5">You listened to <span className="font-bold text-lg">{props.data.artists.size.toLocaleString()}</span> artists.</p>
                <p className="font-light pl-5">You listened to <span className="font-bold text-lg">{props.data.songs.toLocaleString()}</span> songs.</p>
            </div>
        </>
    );
}

export default TopSummary;







