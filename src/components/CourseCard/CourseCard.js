import React, { Component } from "react";
import "./CourseCard.css";
import CourseImg from "../CourseImg";
import ExpiryDate from "../ExpiryDate";
import Branding from "../Branding/branding";

export class CourseCard extends Component {
	render() {
		return (
			<div className="col-md-4 card course-card">
				<div className="row" style={{ marginTop: "35px" }}>
					<div className="col-md-6 course-img">
						<CourseImg
							percent={this.props.data.Percent}
							image={this.props.data["Img"]}
						/>
					</div>

					<div className="col-md-6 course-details col">
						<>
							<p>{this.props.data["Name"]}</p>
							{/* <p>Lorem ipsum dolor sit, amet </p> */}
							{this.props.data.Percent === 100 ? (
								// <p>Course Completed !!</p>
								<p>
									Completed!!
									<br />
									<Branding />
								</p>
							) : (
								<div>
									<ExpiryDate sdate={this.props.data["SDate"]}> </ExpiryDate>
									<ExpiryDate edate={this.props.data["EDate"]} />
								</div>
							)}
						</>
					</div>
				</div>
			</div>
		);
	}
}

export default CourseCard;
