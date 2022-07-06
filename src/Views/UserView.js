import React, {useEffect, useState} from "react";
import "./css/UserView.css"
import {NotFoundView} from "./NotFoundView";
import {useParams} from "react-router-dom";
import {Loader} from "../components/Loader/Loader";

export const UserView = () => {
	const [user, setUser] = useState(null);
	const {id} = useParams();

	useEffect(()=> {
		(async ()=> {
			const res= await fetch(`https://gorest.co.in/public/v2/users/${id}`);
			const data = await res.json();
			setUser(data);
		})();
	},[])



	if (user === null) {
		return <Loader/>
	}

	if (user.message === "Resource not found") {
		return <NotFoundView/>
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
								 className="profile-photo"/>
						<h5><a href="#" className="text-white">id: {user.id}</a></h5>
						<a href="#" className="text-white"><i className="fa fa-user"/> Gender: <strong>{user.gender}</strong></a>
					</div>

					<ul className="nav-news-feed">
						<li><i className="fa fa-id-card icon5"/>
							<div><a href="#"><strong>{user.name}</strong></a></div>
						</li>
						<li><i className={
							user.status === "active" ? "fa fa-check icon1" : "fa fa-ban icon3"
						}
						/>
							<div><a href="#">{user.status}</a></div>
						</li>
						<li><i className="fa fa-envelope icon2"/>
							<div><a href="#">{user.email}</a></div>
						</li>
					</ul>

					<div id="chat-block">
						<div className="title">Edit User</div>
						<div className="title delete">Delete User</div>
					</div>


				</div>
			</div>
		</div>

	)
}