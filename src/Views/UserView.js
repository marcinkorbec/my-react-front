import React, {useEffect, useState} from "react";
import "./css/UserView.css"
import {NotFoundView} from "./NotFoundView";
import {useParams} from "react-router-dom";
import {Loader} from "../components/Loader/Loader";
import {config} from "../utils/config/config";

export const UserView = () => {

	const [user, setUser] = useState(null);
	const {id} = useParams();
	const [resultInfo, setResultInfo] = useState(null)


	useEffect(() => {
		(async () => {
			const res = await fetch(`${config.apiUrl}${id}`);
			const data = await res.json();
			setUser(data);
		})();
	}, [])


	const deleteUser = async (e) => {
		e.preventDefault();

		if (!window.confirm(`Are you sure to delete ${user.name}?`)) {
			return;
		}

		const res = await fetch(`${config.apiUrl}${user.id}`, {
			method: 'DELETE',
			headers: {
				'Authorization': config.token,
			}

		})

		setResultInfo(`User was deleted.`);

		if (res.status === 400 || res.status === 500) {
			const error = await res.json();
			alert(`Error occured: ${error.message}`)
		}
	}


	if (user === null) {
		return <Loader/>
	}

	if (user.message === "Resource not found") {
		return <NotFoundView/>
	}


	if (resultInfo !== null) {
		return (
			<div className="container">
				<div className="added " id="chat-block">
					<p><strong>{resultInfo}</strong></p>
					<a href="/">
						<button
							className="title"
							onClick={() => setResultInfo(null)}
						>
							Go back to the previous page
						</button>
					</a>
				</div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10 offset-md-1 static">

					<div className="profile-card">
						<img src={
							user.gender === "female"
								? "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
								: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
						}
								 alt="user"
								 className="profile-photo"
						/>

						<h5>
							<a href="#"
								 className="text-white"
							>User id: {user.id}
							</a>
						</h5>

						<a href="#" className="text-white">
							<i className="fa fa-user"/>
							Gender: <strong>{user.gender}</strong>
						</a>
					</div>

					<ul className="nav-news-feed">
						<li>
							<i className="fa fa-id-card icon5"/>
							<div>
								<a href="#">
									<strong>{user.name}</strong>
								</a>
							</div>
						</li>
						<li>
							<i className={user.status === "active" ? "fa fa-check icon1" : "fa fa-ban icon3"}/>
							<div>
								<a href="#">{user.status}</a>
							</div>
						</li>
						<li>
							<i className="fa fa-envelope icon2"/>
							<div>
								<a href="#">{user.email}</a>
							</div>
						</li>
					</ul>

					<div id="chat-block">
						<a href={`/user/update/${user.id}`}>
							<button className="title">Edit User</button>
						</a>
						<button
							className="title delete"
							onClick={deleteUser}>Delete User
						</button>
					</div>

				</div>
			</div>
		</div>

	)
}