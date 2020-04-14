import React from "react";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import customInput from "../../Input/Input";
import Select from "../../../components/customSelect";





let ExpenseForm = props =>{
	const{handleSubmit,pockets} = props
	return (
		<form className="mainBlock" onSubmit ={handleSubmit} >
			<Field component={customInput}
				   name="Describe expense"
				   type="text"
				   title="Название"/>
			<Field component={Select}
				   name="SelectedPocket"
				   title="Выбор кошелька">
				   {pockets.map( el => (<option key={el.id} id={el.id} value={el.id}>{el.pocketName}</option>))}
					</Field>	   
			<Field component={customInput}
				   name="currency"
				   type="number"
				   title="Стоимость"/>
			<Field component={customInput}
				   name="date of expence"
				   type="date"
				   title="Дата"/>
			<button className="button"> Расход </button>
		</form>
	)
}	
	
	ExpenseForm = reduxForm({
		form:'expense'
	})(ExpenseForm)


let mapStateToProps = state =>{
	return{
		pockets:state.Pockets.pockets
	}	
}


export default connect(mapStateToProps,{})(ExpenseForm)