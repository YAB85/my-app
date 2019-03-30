import React, {Component} from 'react'

export default class CategoryItem extends Component{
		
	render(){
		return(
			<div className="card flex-row flex-wrap">
		        <div className="card-header border-0">
		            <img src={this.props.imgUrl} alt=""/>
		        </div>
		        <div className="card-block">
		            <h4 className="card-title">{this.props.sl_title}</h4>
		            <p className="card-text">{this.props.sl_text} </p>
		            <p className="card-text">{this.props.sl_auth} </p>
		        </div>
		    </div>
			);
		}
}
