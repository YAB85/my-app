import React, {Component} from 'react'


export default class Header extends Component{
	render(){
		return(
			<header>
				<div className="cover-img">
					<div className="container">
						<nav className="navbar navbar-dark">

						<div className="container">
				  			<a className="navbar-brand" href="#">Weather</a>
				  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
				   			 <i className="fa fa-reorder"></i>
				 			 </button>

						  	<div className="collapse navbar-collapse" id="navbarsExample01">
							    <ul className="navbar-nav mr-auto">
							      <li className="nav-item active">
							        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							      </li>
							      <li className="nav-item">
							        <a className="nav-link" href="#">About</a>
							      </li>
							      
							      <li className="nav-item">
							        <a className="nav-link" href="#">Tickets & offers</a>
							      </li>
										<li className="nav-item">
							        <a className="nav-link" href="#">Thinks to do</a>
							      </li>
										<li className="nav-item">
							        <a className="nav-link" href="#">Accommodation</a>
							      </li>
										<li className="nav-item">
							        <a className="nav-link" href="#">Traveller information</a>
							      </li>
							    </ul>
						  	</div>
						</div>
					</nav>

				
			    <div className="intro-text">
			     	<img src={require('../img/london-eye-in-london-england.png')} />
			        <div className="intro-heading-line"></div>
							<div className="intro-heading">LONDON</div>
			        <div className="intro-lead-in">Explore the secret life of the sity</div>
			        <a className="btn btn-primary btn-xl team-link" data-toggle="modal" href="#modalPhoneForm">EXPLORE THE CITY</a>
			      </div>
			    </div>
					</div>
			</header>
			);
	}
}
