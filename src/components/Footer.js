import React, { Component } from 'react'
import Form from './Form'

export default class Footer extends Component{
	render(){
		return(
			<footer>
				<div className="main-text">
					
					<div className="row">
					<div className="col">
					<div className="text_main">articles</div>
					<ul className="list ul">
						<li className="list li">Exploring the food in the 
						heart of the London
						<li className="none_list">
						<span className="text"> by Felecia Wilson | 25 Aug, 2016</span> 
						</li>
						</li>
						<li className="list li">The history and architecture of England
						<li className="none_list">
						<span className="text"> by Felecia Wilson | 25 Aug, 2016</span> 
						</li>
						</li>
						<li className="list li">Exploring the food in the heart of the London
						<li className="none_list">
						<span className="text"> by Felecia Wilson | 25 Aug, 2016</span> 
						</li>
						</li>
					</ul>
					</div>
					
					<div className="col">
					<div className="text_main">about us</div>
					<div className="p">
					London, the capital of England and 
					the United Kingdom, is a 21st-century 
					city with history stretching back to 
					Roman times. At its centre stand the 
					imposing Houses of Parliament, the iconic 
					‘Big Ben’ clock tower and Westminster Abbey, 
					site of British monarch coronations. Across 
					the Thames River, the London Eye observation 
					wheel provides panoramic views of the South 
					Bank cultural complex, and the entire city.
					</div>
					</div>
					
					<div className="col">
					<div className="text_main">newsletter</div>
					<div className="p">Get updates about new tours, 
					travel tips, photo guides and more !</div>
					<Form />
					
					</div>
					
					</div>
				</div>
				<div></div>
			</footer>
				
			);
	}
}


