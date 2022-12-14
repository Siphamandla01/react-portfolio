import React from "react";
import SovTechLogo from "../sovtech_logo-2.png";

const Navbar = () => {
	return (
		<nav
			className="navbar fixed-top navbar-expand-lg navbar-light bg-dark "
			sticky="top"
		>
			<div className="container">
				<a className="navbar-brand ps-5" href="/">
					<img src={SovTechLogo} alt="SovTech Logo" className="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse pe-5"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">
								about
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#skills">
								Skills
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
