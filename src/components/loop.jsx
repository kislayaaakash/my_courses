import React, { Component } from 'react';
import CardCourses from './CardInterface';
import Sub from './data';
class Loop extends Component {
    render() { 
        let list= Sub.map(course =>
            {
                return(
                    <div className = "col-sm-4">
                        <CardCourses Sub = {course}/>
                    </div>  
                )
            })
        return ( 
            <div className="row">
                {list}
            </div> 
         
        );
    }
}
 
export default Loop;