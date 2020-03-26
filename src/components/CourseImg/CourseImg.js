import React from 'react'
import {CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './CourseImg.css'

const CourseImg = (props) => {

    return (
        <>      
                <div style={{width: "40%"}}>
                <CircularProgressbarWithChildren width={20} circleRatio={1} styles={buildStyles({
                    
                })} value={props.percent}>
                     <img src={props.image} alt="Course"/>
                </CircularProgressbarWithChildren>
                </div>
        </>
    )
}

export default CourseImg;