import React, { Component } from 'react'

export default class Footer extends Component{
	render(){
		return(
			<footer>
				<div className="main-text">
					
					<div className="row">
					<div className="col">
					<div className="text_main">articles</div>
					<div className="list ul">
						<div className="list li">Exploring the food in the heart of the London</div>
						<div className="li"></div>
					</div>
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
					
					<div className="col">newsletter</div>
					
					
					</div>
				</div>
				<div></div>
			</footer>
				
			);
	}
}


