import React, {useEffect, useState} from "react";
import "./css/CreateUserView.css"
import {config} from "../utils/config/config";
import {Loader} from "../components/Loader/Loader"
import {useParams} from "react-router-dom";
import {NotFoundView} from "./NotFoundView";

export const UpdateUserView = () => {
	const {id} = useParams();
	const [user, setUser] = useState(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		gender: '',
		status: ''
	});

	useEffect(()=> {
		(async ()=> {
			const res= await fetch(`${config.apiUrl}${id}`);
			const data = await res.json();
			setUser(data);
		})();
	},[])

	const [loading, setLoading] = useState(false);
	const [resultInfo, setResultInfo] = useState(null)

	const updateForm = (key, value) => {
		setForm(form => ({
			...form,
			[key]: value,
		}))
	}

	const sendForm = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			const res = await fetch(`${config.apiUrl}${id}`, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json',
					'Authorization': config.token,
				},
				body: JSON.stringify(form),
			});

			const data = await res.json();


			setLoading(false);
			setResultInfo(`User was changed.`);


			if (res.status >= 400) {
				alert(`An Error occured: ${data[0].field} ${data[0].message}`)
				setResultInfo(null)
			}

		} finally {
			setLoading(false);
		}
	}

	if (loading) {
		return <Loader/>

	}

	if (resultInfo !== null) {
		return (
			<div className="container">
				<div className="added " id="chat-block">
					<p><strong>{resultInfo}</strong></p>
					<button className="title" onClick={() => setResultInfo(null)}>Go back to the previous page</button>
				</div>
			</div>
		)
	}

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
						<img
							src={
								user.gender === "female"
									? "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
									: "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png"
							}
							alt="user"
							className="profile-photo"/>
						<h5><a href="#" className="text-white">You're editing user with id: <strong>{user.id}</strong></a></h5>
					</div>

					<form onSubmit={sendForm}>
						<ul className="nav-news-feed">

							<label>
								<li><i className="fa fa-id-card icon5"/>
									<input
										type="text"
										placeholder={user.name}
										value={form.name}
										onChange={event => updateForm('name', event.target.value)}
									/>
								</li>
							</label>

							<br/>
							<label>
								<li><i className="fa fa-envelope icon2"/>
									<input
										type="email"
										placeholder={user.email}
										value={form.email}
										onChange={event => updateForm('email', event.target.value)}
									/>
								</li>
							</label>

							<br/>
							<label>
								<li><i className="fa fa-users icon6"/>
									<input
										type="text"
										placeholder={user.gender}
										name="select_gender"
										value={form.gender}
										onChange={event => updateForm('gender', event.target.value)}
									>
									</input>
								</li>
							</label>

							<br/>
							<label>
								<li><i className="fa fa-check icon1"/>
									<input
										type="text"
										placeholder={user.status}
										name="select_status"
										value={form.status}
										onChange={event => updateForm('status', event.target.value)}
									>
									</input>
								</li>
							</label>

						</ul>

						<div id="chat-block">
							<button type="submit" className="title">Update User</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

