import * as React from 'react';
import "./ActivityFeed.css";

export default function ActivityFeed({}) {
    return(
        <div className='activity-feed'>
            <div className='activity-category'>
                <div className='per-category'>
                    <h4>Average Calories Per Category</h4>
                    <p>350</p>
                </div>
                <div className='per-day'>
                    <h4>Total Calories Per Day</h4>
                    <p>2000</p>
                </div>
            </div>
            <div className='activity-category'>
                <div className='per-category'>
                    <h4>Average Calories Per Category</h4>
                    <p>350</p>
                </div>
                <div className='per-day'>
                    <h4>Total Calories Per Day</h4>
                    <p>2000</p>
                </div>
            </div>
            <div className='activity-category'>
                <div className='per-category'>
                    <h4>Average Calories Per Category</h4>
                    <p>350</p>
                </div>
                <div className='per-day'>
                    <h4>Total Calories Per Day</h4>
                    <p>2000</p>
                </div>
            </div>
            
        </div>
    )
}