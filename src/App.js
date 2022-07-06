import './App.css';

function App() {
	return (
		<div className="container mt-3 mb-4">
			<div className="row">
				<div className="col-md-12">
					<div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
						<table className="table manage-candidates-top mb-0">
							<thead>
							<tr>
								<th>User's Name</th>
								<th className="text-center">Status</th>
								<th className="action text-right">Action</th>
							</tr>
							</thead>
							<tbody>
							<tr className="candidates-list">
								<td className="title">
									<div className="thumb">
										<img className="img-fluid" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt=""/>
									</div>
									<div className="candidate-list-details">
										<div className="candidate-list-info">
											<div className="candidate-list-title">
												<h5 className="mb-0"><a href="#">Brooke Kelly</a></h5>
											</div>
											<div className="candidate-list-option">
												<ul className="list-unstyled">
													<li><i className="fa fa-filter pr-1"/>Information Technology</li>
													<li><i className="fa fa-map-marker pr-1"/>Rolling Meadows, IL 60008</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td className="candidate-list-favourite-time text-center">
									<a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fa fa-check"/></a>
									<span className="candidate-list-time order-1"> active</span>
								</td>
								<td>
									<ul className="list-unstyled mb-0 d-flex justify-content-end">
										<li><a href="#" className="text-primary" data-toggle="tooltip" title=""
													 data-original-title="view"><i className="fa fa-eye"/></a></li>
										<li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i
											className="fa fa-pencil"/></a></li>
										<li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i
											className="fa fa-trash"/></a></li>
									</ul>
								</td>
							</tr>
							<tr className="candidates-list">
								<td className="title">
									<div className="thumb">
										<img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
									</div>
									<div className="candidate-list-details">
										<div className="candidate-list-info">
											<div className="candidate-list-title">
												<h5 className="mb-0"><a href="#">Ronald Bradley</a></h5>
											</div>
											<div className="candidate-list-option">
												<ul className="list-unstyled">
													<li><i className="fa fa-filter pr-1"/>Human Resources</li>
													<li><i className="fa fa-map-marker pr-1"/>Monroe Township, NJ 08831</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td className="candidate-list-favourite-time text-center">
									<a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fa fa-ban"/></a>
									<span className="candidate-list-time order-1"> inactive</span>
								</td>
								<td>
									<ul className="list-unstyled mb-0 d-flex justify-content-end">
										<li><a href="#" className="text-primary" data-toggle="tooltip" title=""
													 data-original-title="view"><i className="fa fa-eye"/></a></li>
										<li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i
											className="fa fa-pencil"/></a></li>
										<li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i
											className="fa fa-trash
											"/></a></li>
									</ul>
								</td>
							</tr>
							<tr className="candidates-list">
								<td className="title">
									<div className="thumb">
										<img className="img-fluid" src="https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png" alt=""/>
									</div>
									<div className="candidate-list-details">
										<div className="candidate-list-info">
											<div className="candidate-list-title">
												<h5 className="mb-0"><a href="#">Rafael Briggs</a></h5>
											</div>
											<div className="candidate-list-option">
												<ul className="list-unstyled">
													<li><i className="fa fa-filter pr-1"/>Recruitment Consultancy</li>
													<li><i className="fa fa-map-marker-alt pr-1"/>Haines City, FL 33844</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td className="candidate-list-favourite-time text-center">
									<a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"/></a>
									<span className="candidate-list-time order-1">Shortlisted</span>
								</td>
								<td>
									<ul className="list-unstyled mb-0 d-flex justify-content-end">
										<li><a href="#" className="text-primary" data-toggle="tooltip" title=""
													 data-original-title="view"><i className="fa fa-eye"/></a></li>
										<li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i
											className="fa fa-pencil"/></a></li>
										<li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i
											className="fa fa-trash"/></a></li>
									</ul>
								</td>
							</tr>
							<tr className="candidates-list">
								<td className="title">
									<div className="thumb">
										<img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
									</div>
									<div className="candidate-list-details">
										<div className="candidate-list-info">
											<div className="candidate-list-title">
												<h5 className="mb-0"><a href="#">Vickie Meyer</a></h5>
											</div>
											<div className="candidate-list-option">
												<ul className="list-unstyled">
													<li><i className="fa fa-filter pr-1"/>Human Resources</li>
													<li><i className="fa fa-map-marker pr-1"/>Minneapolis, MN 55406</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td className="candidate-list-favourite-time text-center">
									<a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"/></a>
									<span className="candidate-list-time order-1">Shortlisted</span>
								</td>
								<td>
									<ul className="list-unstyled mb-0 d-flex justify-content-end">
										<li><a href="#" className="text-primary" data-toggle="tooltip" title=""
													 data-original-title="view"><i className="fa fa-eye"/></a></li>
										<li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i
											className="fa fa-pencil"/></a></li>
										<li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i
											className="fa fa-trash"/></a></li>
									</ul>
								</td>
							</tr>
							<tr className="candidates-list">
								<td className="title">
									<div className="thumb">
										<img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
									</div>
									<div className="candidate-list-details">
										<div className="candidate-list-info">
											<div className="candidate-list-title">
												<h5 className="mb-0"><a href="#">Nichole Haynes</a></h5>
											</div>
											<div className="candidate-list-option">
												<ul className="list-unstyled">
													<li><i className="fa fa-filter pr-1"/>Information Technology</li>
													<li><i className="fa fa-map-marker pr-1"/>Botchergate, Carlisle</li>
												</ul>
											</div>
										</div>
									</div>
								</td>
								<td className="candidate-list-favourite-time text-center">
									<a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"/></a>
									<span className="candidate-list-time order-1">Shortlisted</span>
								</td>
								<td>
									<ul className="list-unstyled mb-0 d-flex justify-content-end">
										<li><a href="#" className="text-primary" data-toggle="tooltip" title=""
													 data-original-title="view"><i className="fa fa-eye"/></a></li>
										<li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i
											className="fa fa-pencil"/></a></li>
										<li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i
											className="fa fa-trash"/></a></li>
									</ul>
								</td>
							</tr>
							</tbody>
						</table>
						<div className="text-center mt-3 mt-sm-3">
							<ul className="pagination justify-content-center mb-0">
								<li className="page-item disabled"><span className="page-link">Prev</span></li>
								<li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span
									className="sr-only">(current)</span></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item"><a className="page-link" href="#">...</a></li>
								<li className="page-item"><a className="page-link" href="#">25</a></li>
								<li className="page-item"><a className="page-link" href="#">Next</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
