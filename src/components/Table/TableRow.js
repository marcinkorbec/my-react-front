import React from "react";
import {config} from "../../utils/config/config";

export const TableRow = (props) => {


	const deleteUser = async (e) => {
		e.preventDefault();

		if (!window.confirm(`Are you sure to delete ${props.name}?`)) {
			return;
		}

		const res = await fetch(`${config.apiUrl}${props.id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': config.token,
			}

		})

		if (res.status === 400 || res.status === 500) {
			const error = await res.json();
			alert(`Error occured: ${error.message}`)
		}

		props.onUsersChange();
	}



	return (
		<tr className="candidates-list"
				key={props.id}>
			<td className="title">
				<div className="thumb">
					<img className="img-fluid"
							 src={
								 props.gender === "female"
									 ? "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
									 : "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
							 } alt=""/>
				</div>
				<div className="candidate-list-details">
					<div className="candidate-list-info">
						<div className="candidate-list-title">
							<h5 className="mb-0"><a href={`http://localhost:3000/user/${props.id}`}
							>{props.name}</a></h5>
						</div>
						<div className="candidate-list-option">
							<ul className="list-unstyled">
								<li><i className="fa fa-envelope pr-1"/>{props.email}</li>
							</ul>
						</div>
					</div>
				</div>
			</td>
			<td className="candidate-list-favourite-time text-center">
				<a
					className="candidate-list-favourite order-2 text-danger"
					href="#"
				><i
					className={
						props.status === "active" ? "fa fa-check icon1" : "fa fa-ban icon3"
					}
				/></a>
				<span className="candidate-list-time order-1"> {props.status}</span>
			</td>
			<td>
				<ul className="list-unstyled mb-0 d-flex justify-content-end">
					<li><a
						href={`http://localhost:3000/user/${props.id}`}
						className="text-primary"
						data-toggle="tooltip"
						data-original-title="view"
					><i
						className="fa fa-eye"
					/></a></li>
					<li><a
						href={`http://localhost:3000/user/update/${props.id}`}
						className="text-info"
						data-toggle="tooltip"
						title=""
						data-original-title="Edit"
					><i
						className="fa fa-pencil"
					/></a></li>
					<li><a
						href="#"
						onClick={deleteUser}
						className="text-danger"
						data-toggle="tooltip"
						title=""
						data-original-title="Delete"
					><i
						className="fa fa-trash"/></a></li>
				</ul>
			</td>
		</tr>
	)

}

