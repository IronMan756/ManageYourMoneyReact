import React,{Component} from "react";
import "./Header.css";
import {Link, Redirect} from "react-router-dom";
import logo from "../../images/1.png";
import Avatar from "../../images/avatar.png";
import {logOut} from "../../actions/Registration";
import {connect} from "react-redux";
import NewPocket from "../../containers/NewPocket"


 class Header extends Component{
 	constructor(props){
 		super(props)
 		this.props = props
 	}
 	OnLogOut = () =>{
 		const {logOut} = this.props
 		document.cookie = "userName=; expires=" + new Date ( 0 ).toUTCString ()
 		document.cookie = "userEmail=; expires=" + new Date ( 0 ).toUTCString ()
 		logOut()
 	}
 	ChangePhoto = () =>{
 		const{addUserPhotoRequest} = this.props
		addUserPhotoRequest()
 		return	<Link to="/AddUserPhoto"/>
 	}
 	
 	render(){
 		const {prop,user} = this.props
 		// const photo = localStorage.getItem ( "avatar" ).slice(10)
 		return(
	        <header>
				<div className = "headerFlex">
					<div className="logoHeaderWrap">
						<img className="logo" src={logo} alt="MoneyLogo"/>
						<h1 className = "brandName" >Manage Your Money</h1>
					</div>
					{prop &&  <ul className="navWrap">
									<li><Link className="link" to="/NewPocket">Новый кошелёк</Link></li>
									<li><Link className="link" to="/NewExpense">Новая трата</Link></li>
									<li><Link className="link" to="/NewArrival">Поступление</Link></li>
									<li><Link className="link" to="/Report">Отчет</Link></li>	
							 </ul>}
					<div className="registWrap" >
						<div className="registr">
							{prop ?<span  onClick = {()=> this.OnLogOut()} className="link">Выход</span> : 
							<Link className="link"id="sign-inBtn" to="/AuthPage">Вход</Link>}
							
							{prop ? <span>{prop.name}</span>: <Link className="link" id="registParagraph" to="/Registration">Регистрация</Link>}
						</div>
						<div className="ava" >
						<Link className="link" to="/AddUserPhoto"><img id="avatarka" className="avatarka" src= {user ? user.avatar : Avatar} width="40" height="40"  alt="avatar"/></Link>
						</div>
					</div>
				</div>
			</header>
		);
 	}
}
 const mapStateToProps = (state) =>{
	return{
		user:state.Registration.user
	}; 
};


 export default connect(mapStateToProps,{logOut})(Header)