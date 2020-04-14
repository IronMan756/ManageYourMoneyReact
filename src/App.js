import React, { Component } from "react";
import {Provider, connect} from "react-redux";
import Router from "./Router";
import "./styles/footer_style.css";
import "./styles/App.css";
import Footer from "./components/Footer/Footer.js";
import {BrowserRouter} from "react-router-dom";
import store from "./store";








class App extends Component {
	
	render() {
		return (
			<Provider store={store}>
				<div className="app" >	
					<BrowserRouter >
						<Router />
					</BrowserRouter>
					<Footer/>
				</div>
			</Provider>
		);
	}
}
export default (App)