import React from "react"
import "./Notifications.css"
import closeIcon from './Close-icon.png';
import { getLatestNotification } from './utils';


export function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
                <button
                className='close-icon'
                aria-label='Close'
                onClick={() => console.log('Close button has been clicked')}>
                    <img
                    src={closeIcon}
                    alt='Close'
                    style={{ height: '10px', width: '10px', padding: '10px'}}
                    />
                </button>
            </ul>
        </div>
    )
}