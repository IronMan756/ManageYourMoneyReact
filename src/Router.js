import React  from "react";
import {connect} from "react-redux";
import {Switch, Route, Redirect} from 'react-router-dom';
import Registration from "./containers/Registration/Registration.js";
import AuthPage from "./containers/AuthPage";
import NewArrival from "./containers/NewArrival/NewArrival";
import Header from "./components/Header/Header";
import NewExpense from "./containers/NewExpense/NewExpense";
import Report from "./containers/Report";
import NewPocket from "./containers/NewPocket";
import AddUserPhoto from "./containers/AddUserPhoto";
import {getPocketsFromServer} from "./actions/Pockets";
import {authToStore,authGetUser} from "./actions/Registration";
import {newExpense} from "./actions/Entries"


class Router extends React.Component {
	constructor(props){
		super(props)
		this.props = props
	}
	componentDidMount(){
		this.props.authGetUser()
		this.props.getPocketsFromServer()
		this.props.newExpense()
		
	}
	
	render(){
		const{user,getPocketsFromServer,authUserObj} = this.props
		if(authUserObj && document.cookie){
			this.props.authToStore(authUserObj)}
		return(
			<div> 
				<Header prop={user}/>
				<div className="Layout">
					<Switch>
						<Route
						    exact
						    path="/AuthPage"	
					  	    render={props => (<AuthPage/>)}/>
						<Route 
							exact
						    path="/NewArrival"
				       	    render={props => { 
				       	    	if (user) return <NewArrival/>
				       	    	return <Redirect to="/AuthPage"/>}}/>
						<Route
							exact
							path="/Registration"
							render={props => (<Registration/>)}/>
						<Route
							exact
							path="/NewExpense"
							render={props => {
								if(user) return <NewExpense/>
									return <Redirect to="/AuthPage"/>}}/>
						<Route
							exact
							path="/Report"
							render={props => {
								if(user) return <Report/>
									return <Redirect to="/AuthPage"/>}}/>
						<Route
							exact
							path="/AddUserPhoto"
							render={props => {
								if(user) return <AddUserPhoto/>
									return <Redirect to="/AuthPage"/>}}/>
						<Route
							exact
							path="/NewPocket"
							render={props => {
								if(user) return <NewPocket/>
									return <Redirect to="/AuthPage"/>}}/> 
						<Redirect to="/" />
					</Switch>
				</div>
			</div>	
		);
	};			
}

const mapStateToProps = state =>{
	return {
		user: state.Registration.user,
		authUserObj:state.Registration.authUserObj
	}
}
 
export default connect(mapStateToProps,{getPocketsFromServer,authToStore,authGetUser,newExpense})(Router)