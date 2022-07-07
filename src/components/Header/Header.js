import React from "react";
import "./Header.css"

export const Header = () => (
	<a href="http://localhost:3000">
		<div className="header">
			<h1>Special designed for: </h1>
			<img
				className="mayeryn-logo"
				src="https://mayeryn.com/wp-content/uploads/cropped-logo_wp_dark.png" alt=""/>
		</div>
	</a>
)