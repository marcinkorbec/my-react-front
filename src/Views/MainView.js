import React, {useEffect, useState} from "react";
import {Loader} from "../components/Loader/Loader";
import "./css/MainView.css"
import {TableRow} from "../components/Table/TableRow";
import {config} from "../utils/config/config";

export const MainView = () => {
	const [users, setUsers] = useState(null);

	const refreshUsers = async () => {
		const res = await fetch(`${config.apiUrl}`)
		const data = await res.json();
		setUsers(data);
	}


	useEffect(() => {
		refreshUsers();
	}, [])
	console.log(users)

	if (users === null) {
		return <Loader/>
	}

	return (<div className="container mt-3 mb-4">
			<div className="row">
				<div className="col-md-12">
					<div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
						<table className="table manage-candidates-top mb-0">
							<thead>
							<tr className="table-header">
								<th>User's Name</th>
								<th className="text-center">Status</th>
								<th className="action text-right">Action</th>
							</tr>
							</thead>
							<tbody>
							{
								users.map(item => (
									<TableRow
										onUsersChange={refreshUsers}
										id={item.id}
										email={item.email}
										key={item.id}
										status={item.status}
										name={item.name}
										gender={item.gender}
									/>
								))
							}
							</tbody>
						</table>
						<div className="text-center mt-3 mt-sm-3">
							<div id="chat-block">
								<a href="http://localhost:3000/create-new-user">
									<button  id="add-user">Add New User</button>
								</a>
							</div>
						</div>
						<Loader/>
					</div>
				</div>
			</div>
		</div>
	)
}