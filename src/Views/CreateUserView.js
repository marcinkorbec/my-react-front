import React, {useState} from "react";
import "./css/CreateUserView.css"
import {config} from "../utils/config/config";
import {Loader} from "../components/Loader/Loader"

export const CreateUserView = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		gender: '',
		status: ''
	});

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
			const res = await fetch(`${config.apiUrl}`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					'Authorization': config.token,
				},
				body: JSON.stringify(form),
			});

			const data = await res.json();

			setLoading(false);
			setResultInfo(`${data.name} was added with ID: ${data.id}`);

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
					<button className="title" onClick={() => setResultInfo(null)}>Add another one</button>
				</div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-10 offset-md-1 static">
					<div className="profile-card">
						<img
							src="https://st2.depositphotos.com/1915171/5331/v/600/depositphotos_53310845-stock-illustration-question-mark-sign-icon-help.jpg"
							alt="user"
							className="profile-photo"/>
						<h5><a href="#" className="text-white">Create new User </a></h5>
					</div>

					<form onSubmit={sendForm}>
						<ul className="nav-news-feed">

							<label>
								<li><i className="fa fa-id-card icon5"/>
									<input
										type="text"
										placeholder="first name and last name"
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
										placeholder="user email"
										value={form.email}
										onChange={event => updateForm('email', event.target.value)}
									/>
								</li>
							</label>

							<br/>
							<label>
								<li><i className="fa fa-users icon6"/>
									<select
										type="select"
										id="suggestion"
										name="select_gender"
										value={form.gender}
										onChange={event => updateForm('gender', event.target.value)}
									>
										<option>select gender</option>
										<option>male</option>
										<option>female</option>
									</select>
								</li>
							</label>

							<br/>
							<label>
								<li><i className="fa fa-check icon1"/>
									<select
										type="select"
										id="suggestion"
										name="select_status"
										value={form.status}
										onChange={event => updateForm('status', event.target.value)}
									>
										<option>select status</option>
										<option>active</option>
										<option>inactive</option>
									</select>
								</li>
							</label>

						</ul>

						<div id="chat-block">
							<button type="submit" className="title">Add User</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

