import React, { Component } from 'react';
import {Container,Row, Col} from 'reactstrap';
import CourseCard from './cards' 
class MainArea extends Component {
    state = {  }
    render() { 
        return ( 
            <Container fluid>
                <Row>
                    <Col md = "3">
                        <CourseCard/>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default MainArea;