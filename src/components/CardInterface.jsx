import React, { Component } from 'react';
import Course from './course';
import './card-style-courses.css';
const CardCourses = props =>{
    return(
        <div className = "Test"> 
        <div className = "card text-center" >
        <div className="card-body text-dark">
            <div align = "centre">
            <Course imgUrl = {props.Sub.Img} 
                    name = {props.Sub.Name}
                    percent = {props.Sub.Percent}
                    startDate = {props.Sub.SDate}
                    endDate = {props.Sub.EDate}            
            />
            </div>
        </div>
        </div>
        </div>
    );
 }

 export default CardCourses;
