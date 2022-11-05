import React from "react";
import "./Skills.css";

const Skills = () => {
	return (
		<section id="skills">
			<div className="container mt-5 pt-5 ps-5">
				<h1 className="text-center">Tech Skills</h1>
				<div className="row text-center">
					<div className="col pt-4">
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							HTML
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							CSS
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							JAVASCRIPT
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							PHP
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							C#
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							MYSQL
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							BOOTSTRAP
						</button>
						<button type="button" className="btn btn-dark text-center p-2 me-2">
							GIT
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
