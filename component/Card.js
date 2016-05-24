import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		var icon ='fa-frown-o';
		var style={
			backgroundColor:'rgb(232, 87, 76)'
		};
		if(this.props.UVI<4){
			icon='fa-smile-o';
            style.backgroundColor='rgb(102, 205, 170)';
		}
		else if(this.props.UVI<7){
			icon='fa-meh-o'
            style.backgroundColor='rgb(255, 234, 109)';
		}
		return (
			<div>
				<div className="card">
					<div className="card-icon" style={style} >
						<i className={"fa "+icon} aria-hidden="true"></i>
					</div>
					<div className="card-info">
						<span>地區：{this.props.SiteName}</span>
						<span>紫外線指數：{this.props.UVI}</span>
					</div>
				</div>
			</div>
		);
	}
}
