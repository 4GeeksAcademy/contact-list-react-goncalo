import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">	
				<span className="navbar-brand mb-0 h1"></span>
			<div className="ml-auto mx-3">
				<Link to="/demo">
					<button className="btn btn-success">Add a New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
