import React from 'react'
import './ExpiryDate.css'

const ExpiryDate = (props) =>{
    let date;
    if(props.edate) {
        date = props.edate
    } else {
        date = props.sdate
    }
    return (
        <p>
            {date}
        </p>
    )
}

export default ExpiryDate;