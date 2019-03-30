import React, {Component} from 'react'
import ImageFilter from 'react-image-filter';


const styles = {
	transition: 'all 0.5s'
};

export default class CategoryItem extends Component{
	constructor(){
		super();
		this.state ={
			scale: 1,
			backgroundColor: "white",
			color: "black",
			border: "none", 
			filter: "grayscale"
		};
	}

	_onMouseEnter=()=>{
		this.setState({
			scale: 1.1,
			backgroundColor: "#2387f5",
			color: "white",
			border: "solid 1px #fff", 
			filter: "invert"
		});
	};
	_onMouseLeave=()=>{
		this.setState({
			scale: 1,
			backgroundColor: "white",
			color: "black",
			border: "none", 
			filter: "grayscale"
		});
	};


		
	render(){
		return(
			
			<div className="category-item">
				<div className="card"
					onMouseEnter={this._onMouseEnter} 
					onMouseLeave={this._onMouseLeave} 
					style={{...styles, 
						transform: 'scale('+this.state.scale+')', 
						backgroundColor: this.state.backgroundColor,
						color: this.state.color
					}}
			
				>
				<div className="wrapper" 
					onMouseEnter={this._onMouseEnter} 
					onMouseLeave={this._onMouseLeave} 
					style={{ ...styles, margin: '5px',
						backgroundColor: this.state.backgroundColor,
						border: this.state.border
				}}>
				<ImageFilter
        			image={this.props.imgUrl}
        			filter={ this.state.filter } 
      			/>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.cat_title}</h5>
				    <hr style={{ width: '40px', borderColor: 'white'}} />
				    <p className="card-text bold">{this.props.cat_subtitle}</p>
				    <p className="card-text">{this.props.cat_text}</p>
				  </div>
				  </div>
				</div>
			</div>
	
			);
		}
}
