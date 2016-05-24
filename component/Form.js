import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props){
		super(props);
		this.state={
			SiteName:'',
			UVI:0
		}
	}
	render() {
		return (
			<div>
				<input type='text' 
				onChange={(event)=>{
					this.setState({
						SiteName:event.target.value
					})
				}
				}
				value={this.state.SiteName}></input>
				<input type='number' 
				onChange={(event)=>{
					this.setState({
						UVI:event.target.value
					})
				}}
				value={this.state.UVI}></input>
				<button
				onClick={(event)=>{
					event.preventDefault();
					this.props.submit(this.state)
				}}>送出</button>
			</div>
		);
	}
}
