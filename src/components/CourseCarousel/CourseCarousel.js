import React from 'react'
import CourseCard from '../CourseCard'
import './CourseCarousel.css'

const CourseCarousel = (props) => {
    return (
        <div className="row course-carousel">
            <CourseCard data={props.data[0]}/>
            <CourseCard data={props.data[1]}/>
            <CourseCard data={props.data[2]}/>
            <CourseCard data={props.data[3]}/>
            <CourseCard data={props.data[4]}/>
            <CourseCard data={props.data[5]}/>
            <CourseCard data={props.data[6]}/>
            <CourseCard data={props.data[7]}/>
        </div>
    )
}

export default CourseCarousel;