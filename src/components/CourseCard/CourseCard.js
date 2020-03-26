import React, { Component } from 'react'
import './CourseCard.css'
import CourseImg from '../CourseImg'
import ExpiryDate from '../ExpiryDate'

export class CourseCard extends Component {
    render() {
        return (
            <div  className="col-md-4 card" >
                <div className="row">

                        <div className="col-md-6 course-img">
                            <CourseImg percent={this.props.data.Percent} image={this.props.data["Img"]}/>
                        </div>

                        <div className="col-md-6 course-details col">
                            <>
                                <p>{this.props.data["Name"]}</p> 
                                <p>Lorem ipsum dolor sit, amet </p>
                                <ExpiryDate sdate={this.props.data["SDate"]}> </ExpiryDate>
                                <ExpiryDate edate={this.props.data["EDate"]}/>
                            </>
                        </div>
                </div>
            </div>
        )
    }
}

export default CourseCard
