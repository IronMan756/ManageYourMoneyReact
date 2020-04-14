import React,{Component} from "react";
import Template from "../../components/ComponentTemplate/ComponentTemplate";
import {connect} from "react-redux";
import {postNewPocket} from "../../actions/Pockets";
import "./newPocket.css"


class NewPocket extends Component{
 	  state = {
 	  		pocketName:null,
 	  		cashGRN:Number,
 	  		cashUSD:Number,
  		    dependentPockets:{},
  		    id:null
 	  } 

onSubmit = e => {
 	this.props.postNewPocket(this.state)
 }
pocketName = e =>{
	this.setState({pocketName:e.currentTarget.value})
}
cashGRN = e => {
	this.setState({cashGRN :Number(e.currentTarget.value)})
}
cashUSD = e =>{
	this.setState({cashUSD :Number(e.currentTarget.value)})
}	
dependentPockets = e =>{
	this.setState({dependentPockets :e.currentTarget.value})
}		
   

 render(){
 		const{pockets} = this.props
 		let name = "pocket-name"
		return(
			<div className="NewPocket">
				<Template title="Новый кошелек"/>
				<form id="elem" className="mainWrap">
			        <div className="inputStyle">
			            <label className="controlLabel2" >Название кошелька</label>
			            <input type="text" 
			            	   onChange={e =>this.pocketName(e)} 
			            	   value={this.state.pocketName} 
			            	   name="pocketName" 
			            	   className="formControl" />
			        </div>
			        <div className="inputStyle">
			            <label className="controlLabel2" >Баланс, грн</label>
			            <input type="number"onChange={e =>this.cashGRN(e)}
			            	   name="cashGRN" value={this.state.cashGRN}
			            	   className="formControl" />
			        </div>
			        <div className="inputStyle">
			            <label className="controlLabel2" >Баланс, USD</label>
			            <input type="number"onChange={e =>this.cashUSD(e)}
			            	   name="cashUSD" value={this.state.currency}
			            	   className="formControl" />
			        </div>
				</form>
					<button onClick={e=>this.onSubmit(e)} className="button"> Новый кошелек </button>
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return {
		pockets: state.Pockets.pockets
	}
}

export default connect(mapStateToProps,{postNewPocket})(NewPocket)