import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.js";
import {createStore} from 'redux';
import reducer from './reducers/index.js';
import {Provider} from 'react-redux';
var store = createStore(reducer)
// ReactDOM.render(<div>Hello Leo</div>,document.getElementById('root'))
ReactDOM.render(
	<Provider store={store}>
		<App data={[]}></App>
	</Provider>
	,document.getElementById('root'))
