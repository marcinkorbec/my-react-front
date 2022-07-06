import React from "react";
import "./css/NotFoundView.css";

export const NotFoundView = ()=> (
	<div className=" container">
		<div className="not-found">
			<p className="not-found-message">
				<strong className="err-404">
					404
				</strong>
				<br/>
				Not found! :)
			</p>
		</div>
	</div>
)