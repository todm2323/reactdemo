import React, { Component } from 'react';
import Card from "./Card.js";
import Form from "./Form.js";
import {connect} from 'react-redux';
import {addCard} from "../action/appAction.js";
class App extends Component {
	render() {
	    // var data = 
    var dataList=this.props.card.map(function(item){
    	return <Card SiteName={item.SiteName} UVI={item.UVI}></Card>
    });
		return (
			<div>
			    <Form submit={(item)=>{
			    	this.props.dispatch(addCard(item))
			    }}></Form>
				<div className="cards">
					{dataList}
				</div>
			</div>
		);
	}
}
export default connect(function(state){
	return {
		card:state.card
	}
})(App)
