import * as React from 'react';
import ActivityFeed from 'components/ActivityFeed/ActivityFeed';
import "./ActivityPage.css";

export default function ActivityPage({}) {
    return(
        <div className='activity-page'>
            <h1>Activity</h1>
            <ActivityFeed/>
        </div>
    )
}