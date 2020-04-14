import React,{Component} from "react";
import Template from "../../components/ComponentTemplate/ComponentTemplate";
import "./NewArrival.css";
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {postNewArrival} from "../../actions/Arrival"

 
 class NewArrival extends Component{
 	  state = {
	 	  	arrival:{
	 	  		selectedPocket:"",
	 	  		currency:"",
	 	  		arrivalName:"",
	 	  		Date:"",
	 	  		sort: "NewArrival"
	 	  	},
	 	  	prevPockets: this.props.pockets,
 	  } 
 	

	selectedPocket = e =>{
		const event =Number(e.currentTarget.value)
		console.log("selectedPocket",event)
		this.setState(prev => ({...prev, arrival:{
			... prev.arrival , 
				selectedPocket: event}}))	
	}
	currency = e =>{
		const event =Number( e.currentTarget.value)
		this.setState(prev => ({...prev, arrival:{
			... prev.arrival , 
				currency:event }}))	
	}

	arrivalName = e => {
		const event = e.currentTarget.value
		this.setState(prev => ({...prev, arrival:{
			... prev.arrival , 
				arrivalName:event }}))	
	}

	date = e =>{
		const event = e.currentTarget.value
		this.setState(prev => ({...prev, arrival:{
			... prev.arrival , 
				date:event }}))	
	}
 
	onSubmit = e => {
		const{postNewArrival} = this.props
		postNewArrival(this.state.arrival)
    	// let idPocket = Number(this.state.arrival.selectedPocket)
    	// let selectedPocket = this.state.prevPockets.filter(el => el.id ===idPocket)[0]
    	// let selectedPocketPrevCashGrn = selectedPocket.cashGRN
    	// let selectedPocketPrevCashUsd = selectedPocket.cashUSD
   
    	// let currentGRN = this.state.arrival.currency
    	// let res = selectedPocketPrevCashGrn-currentGRN
    	// this.props.requestArrival(res,idPocket)
   //  	this.setState(prev => ({...prev,prevPockets:[
			// ... prev.prevPockets[idPocket]
			// ]}))	
   //  	console.log(this.state)
 		// this.props.postNewArrival(this.state.prevPockets)
 	// 
 	}


 	render(){
 		const{pockets} =this.props
 		return(
			<div className="NewArrival">
				<Template title="Новое поступление"/>
				<form id="elem"className="mainWrap mainWrap2">
			        <div className="inputStyle">
			            <label className="controlLabel2" >Название поступления</label>
			            <input type="text" 
			            	   onChange={e =>this.arrivalName(e)} 
			            	   value={this.state.arrivalName} 
			            	   name="arrivalName" 
			            	   className="formControl" />
			        </div>
			        <div className="inputStyle">
			            <label className="controlLabel2">Выбор кошелька</label>
			            <select id="select" name="selectedPocket" onChange={e  =>this.selectedPocket(e)} value={this.props.selectedPocket} className="formControl" >
			            	{pockets.map( el => (<option key={el.id} id={el.id} value={el.id}>{el.pocketName}</option>))}
			            </select>
			        </div>
			        <div className="inputStyle">
			            <label className="controlLabel2" >Размер поступления</label>
			            <input type="number"onChange={e =>this.currency(e)} name="currency" value={this.state.currency} className="formControl" />
			        </div>
			        <div className="inputStyle">
			            <label className="controlLabel2" >Дата</label>
			            <input type="date" onChange={e =>this.date(e)} value={this.state.date} name="date" className="formControl" />
			        </div>
				</form>
					<button onClick={e=>this.onSubmit(e)} className="button1"> Поступление </button>
			</div>
		);
 	}
		
}


const mapStateToProps = state =>{
	return {
		isFetching: state.Registration.isFetching,
		pockets: state.Pockets.pockets,
	}
}
export default connect (mapStateToProps,{postNewArrival})(NewArrival)
