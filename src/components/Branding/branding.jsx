import React, { Component } from "react";

import axios from "axios";

import {
	FacebookShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	TwitterShareButton,
	WhatsappShareButton
} from "react-share";

import {
	FacebookIcon,
	LinkedinIcon,
	PinterestIcon,
	TwitterIcon,
	WhatsappIcon
} from "react-share";

class Branding extends Component {
	render() {
		// let userId = 143;
		// let course = "Java";
		let userId = this.props.userId;
		let course = this.props.course;
		return (
			<>
				<FacebookShareButton
					children={<FacebookIcon size={32} round={true} />}
					url={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					//url="/images/branding_template.jpg"
					quote={"I completed my PSI " + course + " certification."}
					hashtag="#psi#certificate"
				/>
				&nbsp;
				<LinkedinShareButton
					children={<LinkedinIcon size={32} round={true} />}
					url={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					title="PSI certification"
					summary="PSI certification"
					source="PSI gamify"
				/>
				&nbsp;
				<PinterestShareButton
					children={<PinterestIcon size={32} round={true} />}
					media={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					url={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					description="PSI certification"
				/>
				&nbsp;
				<TwitterShareButton
					children={<TwitterIcon size={32} round={true} />}
					url={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					title="PSI certification"
					via=""
					hashtags="['#psi','#certificate']"
					related="(array): Accounts to recommend following"
				/>
				&nbsp;
				<WhatsappShareButton
					children={<WhatsappIcon size={32} round={true} />}
					url={
						"https://gamify.s3.amazonaws.com/certificates/" +
						userId +
						"_" +
						course +
						"_cert.jpg"
					}
					title="PSI certification"
					separator="  "
				/>
				{/* <button
					type="button"
					onClick={() => {
						axios
							.post("http://localhost:8087/create-certificate", {
								userId: "143",
								fname: "Fred",
								lname: "Flinstone",
								course: "Java",
								date: "2020-03-25"
							})
							.then(res => {
								console.log(res);
							})
							.catch(error => {
								console.log(error);
							});
						// axios.get("http://localhost:8087/branding").then(res => {
						// 	console.log(res);
						// });
					}}
				>
					CLICK
				</button> */}
			</>
		);
	}
}

export default Branding;
