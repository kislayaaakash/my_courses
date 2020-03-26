import React from 'react'
import './ExpiryDate.css'

const ExpiryDate = (props) =>{
    let date;
    if(props.edate) {
        date = "End Date: "+ props.edate
    } else {
        date = "Start Date: "+ props.sdate
    }
    return (
        <p>
            {date}
        </p>
    )
}

export default ExpiryDate;