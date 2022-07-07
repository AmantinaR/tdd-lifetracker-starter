import * as React from 'react';
import bottom from "../../assets/bottom.png";
import ActivityFeed from 'components/ActivityFeed/ActivityFeed';
import "./ActivityPage.css";

export default function ActivityPage({}) {
    return(
        <>
            <img className="activity-img" src={bottom} alt="" />
            <div className='activity-page'>
                <h1>Activity</h1>
                <ActivityFeed/>
            </div>
        </>
        
    )
}