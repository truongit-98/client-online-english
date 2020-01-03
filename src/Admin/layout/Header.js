import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div id="wrapper">
				<nav className="navbar top-navbar">
					<div className="container-fluid">
						<div className="navbar-left">
							<div className="navbar-btn">
								<Link><img src="~/Content/TemplateAdmin/images/icon.svg" alt="Oculux Logo" className="img-fluid logo" /></Link>
								<button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu fa fa-bars" /></button>
							</div>
							<ul className="nav navbar-nav">
								<li className="dropdown">
									<Link href="/" className="dropdown-toggle icon-menu" data-toggle="dropdown">
										<i className="icon-envelope" />
										<span className="notification-dot bg-green">4</span>
									</Link>
									<ul className="dropdown-menu right_chat email vivify fadeIn">
										<li className="header green">You have 4 New eMail</li>
										<li>
											<Link href="/">
												<div className="media">
													<div className="avtar-pic w35 bg-red"><span>FC</span></div>
													<div className="media-body">
														<span className="name">James Wert <small className="float-right text-muted">Just now</small></span>
														<span className="message">Update GitHub</span>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="media">
													<div className="avtar-pic w35 bg-indigo"><span>FC</span></div>
													<div className="media-body">
														<span className="name">Folisise Chosielie <small className="float-right text-muted">12min ago</small></span>
														<span className="message">New Messages</span>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="media">
													<img className="media-object " src="~/Content/TemplateAdmin/images/xs/avatar5.jpg" alt="" />
													<div className="media-body">
														<span className="name">Louis Henry <small className="float-right text-muted">38min ago</small></span>
														<span className="message">Design bug fix</span>
													</div>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="media mb-0">
													<img className="media-object " src="~/Content/TemplateAdmin/images/xs/avatar2.jpg" alt="" />
													<div className="media-body">
														<span className="name">Debra Stewart <small className="float-right text-muted">2hr ago</small></span>
														<span className="message">Fix Bug</span>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</li>
								<li className="dropdown">
									<Link href="/" className="dropdown-toggle icon-menu" data-toggle="dropdown">
										<i className="icon-bell" />
										<span className="notification-dot bg-azura">4</span>
									</Link>
									<ul className="dropdown-menu feeds_widget vivify fadeIn">
										<li className="header blue">You have 4 New Notifications</li>
										<li>
											<Link href="/">
												<div className="feeds-left bg-red"><i className="fa fa-check" /></div>
												<div className="feeds-body">
													<h4 className="title text-danger">Issue Fixed <small className="float-right text-muted">9:10 AM</small></h4>
													<small>WE have fix all Design bug with Responsive</small>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="feeds-left bg-info"><i className="fa fa-user" /></div>
												<div className="feeds-body">
													<h4 className="title text-info">New User <small className="float-right text-muted">9:15 AM</small></h4>
													<small>I feel great! Thanks team</small>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="feeds-left bg-orange"><i className="fa fa-question-circle" /></div>
												<div className="feeds-body">
													<h4 className="title text-warning">Server Warning <small className="float-right text-muted">9:17 AM</small></h4>
													<small>Your connection is not private</small>
												</div>
											</Link>
										</li>
										<li>
											<Link href="/">
												<div className="feeds-left bg-green"><i className="fa fa-thumbs-o-up" /></div>
												<div className="feeds-body">
													<h4 className="title text-success">2 New Feedback <small className="float-right text-muted">9:22 AM</small></h4>
													<small>It will give a smart finishing to your site</small>
												</div>
											</Link>
										</li>
									</ul>
								</li>
								<li className="dropdown language-menu">
									<Link className="dropdown-toggle icon-menu" data-toggle="dropdown">
										<i className="fa fa-language" />
									</Link>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<Link className="dropdown-item pt-2 pb-2"><img src="/TemplateAdmin/images/flag/us.svg" className="w20 mr-2 rounded-circle" /> US English</Link>
										<Link className="dropdown-item pt-2 pb-2"><img src="/TemplateAdmin/images/flag/gb.svg" className="w20 mr-2 rounded-circle" /> UK English</Link>
										<div className="dropdown-divider" />
										<Link className="dropdown-item pt-2 pb-2"><img src="/TemplateAdmin/images/flag/russia.svg" className="w20 mr-2 rounded-circle" /> Russian</Link>
										<Link className="dropdown-item pt-2 pb-2"><img src="/TemplateAdmin/images/flag/arabia.svg" className="w20 mr-2 rounded-circle" /> Arabic</Link>
										<Link className="dropdown-item pt-2 pb-2"><img src="/TemplateAdmin/images/flag/france.svg" className="w20 mr-2 rounded-circle" /> French</Link>
									</div>
								</li>
								<li><Link className="megamenu_toggle icon-menu" title="Mega Menu">Mega</Link></li>
								<li className="p_social"><Link className="social icon-menu" title="News">Social</Link></li>
								<li className="p_news"><Link className="news icon-menu" title="News">News</Link></li>
								<li className="p_blog"><Link className="blog icon-menu" title="Blog">Blog</Link></li>
							</ul>
						</div>
						<div className="navbar-right">
							<div id="navbar-menu">
								<ul className="nav navbar-nav">
									<li><Link className="search_toggle icon-menu" title="Search Result"><i className="icon-magnifier" /></Link></li>
									<li><Link className="right_toggle icon-menu" title="Right Menu"><i className="icon-bubbles" /><span className="notification-dot bg-pink">2</span></Link></li>
									<li><Link href="/Admin/DangXuat" className="icon-menu"><i className="icon-power" /></Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="progress-container"><div className="progress-bar" id="myBar" /></div>
				</nav>
				<div className="search_div">
					<div className="card">
						<div className="body">
							<form id="navbar-search" className="navbar-form search-form">
								<div className="input-group mb-0">
									<input type="text" className="form-control" placeholder="Search..." />
									<div className="input-group-append">
										<span className="input-group-text"><i className="icon-magnifier" /></span>
										<Link href="/" className="search_toggle btn btn-danger"><i className="icon-close" /></Link>
									</div>
								</div>
							</form>
						</div>
					</div>
					<span>Search Result <small className="float-right text-muted">About 90 results (0.47 seconds)</small></span>
					<div className="table-responsive">
						<table className="table table-hover table-custom spacing5">
							<tbody>
								<tr>
									<td className="w40">
										<span>01</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<div className="avtar-pic w35 bg-red" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>SS</span></div>
											<div className="ml-3">
												<Link href="page-invoices-detail.html" title>South Shyanne</Link>
												<p className="mb-0">south.shyanne@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>02</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<img src="~/Content/TemplateAdmin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
											<div className="ml-3">
												<Link href="/" title>Zoe Baker</Link>
												<p className="mb-0">zoe.baker@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>03</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<div className="avtar-pic w35 bg-indigo" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>CB</span></div>
											<div className="ml-3">
												<Link href="/" title>Colin Brown</Link>
												<p className="mb-0">colinbrown@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>04</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<div className="avtar-pic w35 bg-green" data-toggle="tooltip" data-placement="top" title data-original-title="Avatar Name"><span>KG</span></div>
											<div className="ml-3">
												<Link href="/" title>Kevin Gill</Link>
												<p className="mb-0">kevin.gill@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>05</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<img src="~/Content/TemplateAdmin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
											<div className="ml-3">
												<Link href="/" title>Brandon Smith</Link>
												<p className="mb-0">Maria.gill@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>06</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<img src="~/Content/TemplateAdmin/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
											<div className="ml-3">
												<Link href="/" title>Kevin Baker</Link>
												<p className="mb-0">kevin.baker@example.com</p>
											</div>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<span>07</span>
									</td>
									<td>
										<div className="d-flex align-items-center">
											<img src="~/Content/TemplateAdmin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title alt="Avatar" className="w35 h35 rounded" data-original-title="Avatar Name" />
											<div className="ml-3">
												<Link href="/" title>Zoe Baker</Link>
												<p className="mb-0">zoe.baker@example.com</p>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="megamenu" className="megamenu particles_js">
					<Link href="/" className="megamenu_toggle btn btn-danger"><i className="icon-close" /></Link>
					<div className="container">
						<div className="row clearfix">
							<div className="col-12">
								<ul className="q_links">
									<li><Link><i className="icon-envelope" /><span>Inbox</span></Link></li>
									<li><Link><i className="icon-bubbles" /><span>Messenger</span></Link></li>
									<li><Link><i className="icon-calendar" /><span>Event</span></Link></li>
									<li><Link><i className="icon-user" /><span>Profile</span></Link></li>
									<li><Link><i className="icon-printer" /><span>Invoice</span></Link></li>
									<li><Link><i className="icon-list" /><span>Timeline</span></Link></li>
								</ul>
							</div>
							<div className="col-md-4 col-sm-12">
								<div className="card w_card3">
									<div className="body">
										<div className="text-center">
											<i className="icon-picture text-info" />
											<h4 className="m-t-25 mb-0">104 Picture</h4>
											<p>Your gallery download complete</p>
											<Link href="/" className="btn btn-info btn-round">Download now</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-12">
								<div className="card w_card3">
									<div className="body">
										<div className="text-center">
											<i className="icon-diamond text-success" />
											<h4 className="m-t-25 mb-0">813 Point</h4>
											<p>You are doing great job!</p>
											<Link href="/" className="btn btn-success btn-round">Read now</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-12">
								<div className="card w_card3">
									<div className="body">
										<div className="text-center">
											<i className="icon-social-twitter text-primary" />
											<h4 className="m-t-25 mb-0">3,756</h4>
											<p>New Followers on Twitter</p>
											<Link href="/" className="btn btn-primary btn-round">Find more</Link>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<ul className="list-group">
									<li className="list-group-item">
										Anyone send me a message
										<div className="float-right">
											<label className="switch">
												<input type="checkbox" defaultChecked />
												<span className="slider round" />
											</label>
										</div>
									</li>
									<li className="list-group-item">
										Anyone seeing my profile page
										<div className="float-right">
											<label className="switch">
												<input type="checkbox" defaultChecked />
												<span className="slider round" />
											</label>
										</div>
									</li>
									<li className="list-group-item">
										Anyone posts a comment on my post
										<div className="float-right">
											<label className="switch">
												<input type="checkbox" />
												<span className="slider round" />
											</label>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div id="particles-js" />
				</div>
				<div id="rightbar" className="rightbar">
					<div className="body">
						<ul className="nav nav-tabs2">
							<li className="nav-item"><Link className="nav-link active" data-toggle="tab" href="#Chat-one">Chat</Link></li>
							<li className="nav-item"><Link className="nav-link" data-toggle="tab" href="#Chat-list">List</Link></li>
							<li className="nav-item"><Link className="nav-link" data-toggle="tab" href="#Chat-groups">Groups</Link></li>
						</ul>
						<hr />
						<div className="tab-content">
							<div className="tab-pane vivify fadeIn delay-100 active" id="Chat-one">
								<div className="slim_scroll">
									<div className="chat_detail">
										<ul className="chat-widget clearfix">
											<li className="left float-left">
												<div className="avtar-pic w35 bg-pink"><span>KG</span></div>
												<div className="chat-info">
													<span className="message">Hello, John<br />What is the update on Project X?</span>
												</div>
											</li>
											<li className="right">
												<img src="~/Content/TemplateAdmin/images/xs/avatar1.jpg" className="rounded" alt="" />
												<div className="chat-info">
													<span className="message">Hi, Alizee<br /> It is almost completed. I will send you an email later today.</span>
												</div>
											</li>
											<li className="left float-left">
												<div className="avtar-pic w35 bg-pink"><span>KG</span></div>
												<div className="chat-info">
													<span className="message">That's great. Will catch you in evening.</span>
												</div>
											</li>
											<li className="right">
												<img src="~/Content/TemplateAdmin/images/xs/avatar1.jpg" className="rounded" alt="" />
												<div className="chat-info">
													<span className="message">Sure we'will have a blast today.</span>
												</div>
											</li>
										</ul>
										<div className="input-group p-t-15">
											<textarea rows={3} className="form-control" placeholder="Enter text here..." defaultValue={""} />
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane vvivify fadeIn delay-100" id="Chat-list">
								<ul className="right_chat list-unstyled mb-0">
									<li className="offline">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-red"><span>FC</span></div>
												<div className="media-body">
													<span className="name">Folisise Chosielie</span>
													<span className="message">offline</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<img className="media-object " src="~/Content/TemplateAdmin/images/xs/avatar3.jpg" alt="" />
												<div className="media-body">
													<span className="name">Marshall Nichols</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-red"><span>FC</span></div>
												<div className="media-body">
													<span className="name">Louis Henry</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-orange"><span>DS</span></div>
												<div className="media-body">
													<span className="name">Debra Stewart</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="offline">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-green"><span>SW</span></div>
												<div className="media-body">
													<span className="name">Lisa Garett</span>
													<span className="message">offline since May 12</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<img className="media-object " src="~/Content/TemplateAdmin/images/xs/avatar5.jpg" alt="" />
												<div className="media-body">
													<span className="name">Debra Stewart</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="offline">
										<Link href="/">
											<div className="media">
												<img className="media-object " src="~/Content/TemplateAdmin/images/xs/avatar2.jpg" alt="" />
												<div className="media-body">
													<span className="name">Lisa Garett</span>
													<span className="message">offline since Jan 18</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-indigo"><span>FC</span></div>
												<div className="media-body">
													<span className="name">Louis Henry</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-pink"><span>DS</span></div>
												<div className="media-body">
													<span className="name">Debra Stewart</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="offline">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-info"><span>SW</span></div>
												<div className="media-body">
													<span className="name">Lisa Garett</span>
													<span className="message">offline since May 12</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
							<div className="tab-pane vivify fadeIn delay-100" id="Chat-groups">
								<ul className="right_chat list-unstyled mb-0">
									<li className="offline">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-cyan"><span>DT</span></div>
												<div className="media-body">
													<span className="name">Designer Team</span>
													<span className="message">offline</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li><li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-azura"><span>SG</span></div>
												<div className="media-body">
													<span className="name">Sale Groups</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="online">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-orange"><span>NF</span></div>
												<div className="media-body">
													<span className="name">New Fresher</span>
													<span className="message">online</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
									<li className="offline">
										<Link href="/">
											<div className="media">
												<div className="avtar-pic w35 bg-indigo"><span>PL</span></div>
												<div className="media-body">
													<span className="name">Project Lead</span>
													<span className="message">offline since May 12</span>
													<span className="badge badge-outline status" />
												</div>
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="left-sidebar" className="sidebar">
					<div className="navbar-brand">
						<Link href="/Admin"><img src="~/Content/TemplateAdmin/images/icon.svg" alt="MoonStore Logo" className="img-fluid logo" /><span>MoonStore</span></Link>
						<button type="button" className="btn-toggle-offcanvas btn btn-sm float-right"><i className="lnr lnr-menu icon-close" /></button>
					</div>
					<div className="sidebar-scroll">
						<div className="user-account">
							<div className="user_div">
								{/* @* //<img src="@obj.Image" class="user-photo" alt="User Profile Picture">*@ */}
							</div>
							<div className="dropdown">
								<span>Welcome,</span>
								<Link href="/" className="dropdown-toggle user-name" data-toggle="dropdown"><strong>Tên user</strong></Link>
								<ul className="dropdown-menu dropdown-menu-right account vivify flipInY">
									<li><Link href="/Admin/Thongtincanhan"><i className="icon-user" />Thông tin cá nhân</Link></li>
									<li><Link href="/Admin/DangXuat"><i className="icon-power" />Đăng xuất</Link></li>
								</ul>
							</div>
						</div>
						<nav id="left-sidebar-nav" className="sidebar-nav" style={{ marginBottom: '200px' }}>
							<ul id="main-menu" className="metismenu">
								<li className="header">Chính</li>
								<li>
									<Link href="/"><i className="icon-home" /><span>Trang bán hàng</span></Link>
								</li>
								<li className="active open"><Link href="/Admin/Index"><i className="icon-speedometer" /><span>Trang Admin</span></Link></li>
								{/*User*/}
								<li className="header">Tài khoản</li>
								<li>
									<Link href className="has-arrow"><i className="icon-shield" /><span>Admins</span></Link>
									<ul>
										<li><Link href="/QuanLyTaiKhoan/lstAdmin">Danh sách admin</Link></li>
										<li><Link href="/QuanLyTaiKhoan/ThemMoiAdmin">Thêm mới admin</Link></li>
									</ul>
								</li>
								<li>
									<Link href className="has-arrow"><i className="icon-user" /><span>Users</span></Link>
									<ul>
										<li><Link href="/QuanLyTaiKhoan/lstUser">Danh sách người dùng</Link></li>
									</ul>
								</li>
								<li className="header">Sản phẩm</li>
								<li><Link href="/QuanLySanPham/ListLaptop"><i className="icon-screen-desktop" /><span>Danh sách Laptop</span></Link></li>
								<li><Link href="/QuanLySanPham/ListHangsx"><i className="icon-bag" /><span>Hãng sản xuất</span></Link></li>
								<li><Link href="/QuanLySanPham/ListKM"><i className="icon-disc" /><span>Khuyến mãi</span></Link></li>
								<li>
									<Link href="#forms" className="has-arrow"><i className="icon-pencil" /><span>Quản lý đơn hàng</span></Link>
									<ul>
										<li><Link href="/QuanLyDonHang/DonHangChuaXacNhan">Đơn hàng chưa xác nhận</Link></li>
										<li><Link href="/QuanLyDonHang/DonHangDangXuLy">Đơn hàng đang xử lý</Link></li>
										<li><Link href="/QuanLyDonHang/DonHangDaGiao">Đơn hàng đã giao</Link></li>
										<li><Link href="/QuanLyDonHang/DonHangBiHuy">Đơn hàng bị hủy</Link></li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div id="main-content" style={{ marginTop: '100px', marginBottom: '200px' }}>
					@RenderBody()
				</div>
			</div>
		);
	}
}

export default Header;