import React from "react";
import "./About.css";
import pic from "../Siphamandla_Image.jpeg";
const About = () => {
	return (
		<section id="about">
			<div className="container mt-5 pt-5 ps-5" id="about">
				<h1 className="text-center">About Me</h1>
				<div className="row mt-4">
					<div className="col-lg-4">
						<img src={pic} alt="my image" />
					</div>
					<div className="col-lg-5">
						<p>
							A Sofware Development National Diploma Graduate who is currently
							pursuing his Advanced Diploma. Passionate about computers and
							enjoy seeing my ideas come to life.
						</p>
						<div className="row mt-3">
							<div className="col-md-6">
								<ul>
									<li>Name: Siphamandla Mncube</li>
									<li>Age: 26</li>
									<li>Stream: Software</li>
								</ul>
							</div>
						</div>
						<div className="row mt-3">
							<p>
								Looking at the companies SovTech associates it's self with, one
								can quickly tell that it is a company that prides it's self with
								always putting it's best foot forward and leaving an impact
								wherever it passes. For SovTech to offer such an opportunity to
								recent graduates shows exactly how passionate the company is
								about IT and how much they are willing to invest in the future.
								My reason for wanting to become part of SovTech is that I
								believe there is still alot for me to learn about both the
								technical and business side of information technology and
								SovTech is offering that opportunity to learn from Industry
								professionals who have years of experiece within this field.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
