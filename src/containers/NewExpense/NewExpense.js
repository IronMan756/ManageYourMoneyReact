import React,{Component} from "react";
import {connect} from "react-redux";

import "../../styles/SympleComponent.css";
import "./NewExpense.css"
import Template from "../../components/ComponentTemplate/ComponentTemplate";
import ExpenseForm from "../../components/forms/expenseForm";
import {newExpense} from "../../actions/Entries"





class NewExpense extends Component{

 // state ={
 // 		Cost: 0,
 		

expenseSubmit = formData =>{
	console.log("formData",formData)
	const {newExpense} = this.props
	newExpense(formData)
}

 
render(){	
		const{pockets} = this.props
		return(
			<div className="NewExpense">
				<Template title="Новый расход"/>
				<ExpenseForm onSubmit={this.expenseSubmit} />
			</div>
		);
	} 

}


const mapStateToProps = state =>{
	return{
		pockets: state.Pockets.pockets
	}
}

export default connect(mapStateToProps,{newExpense})(NewExpense)