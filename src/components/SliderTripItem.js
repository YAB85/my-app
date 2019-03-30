import React, {Component} from 'react'


const styles = {
	transition: 'all 0.5s ease-in'
};

export default class CategoryItem extends Component{
	constructor(){
		super();
		this.state ={
			scale: 1,
			display: 'none'
		};
	}

	_onMouseEnter=()=>{
		this.setState({
			scale: 1.25,
			display: 'block'
		});
	};
	_onMouseLeave=()=>{
		this.setState({
			scale: 1,
			display: 'none'
		});
	};

	render(){
		return(
			
			<div className="slider-trip-item"
				onMouseEnter={this._onMouseEnter} 
					onMouseLeave={this._onMouseLeave} 
					style={{...styles, 
						transform: 'scale('+this.state.scale+')'
					}}
			>
				<img src={this.props.imgUrl} alt="Card image cap"/>
				  
				<div className="card card-trip"
					onMouseEnter={this._onMouseEnter} 
					onMouseLeave={this._onMouseLeave} 
					style={{...styles,
						display: this.state.display
					}}	
				>
				<div className="card-body">
				    <h5 className="card-title">{this.props.tr_title}</h5>
				    <hr style={{ width: '40px', borderColor: 'white'}} />
				    <p className="card-text">{this.props.tr_text}</p>
				    <a href="#" class="btn btn-primary">Book Now</a>
				 </div>
				
				</div>
			</div>
	
			);
		}
}
