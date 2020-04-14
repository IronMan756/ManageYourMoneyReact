import React from "react";
import Template from "../../components/ComponentTemplate/ComponentTemplate";
import "./Report.css";
import "../../styles/SympleComponent.css";
import {connect} from "react-redux";





class Report extends React.Component{
	render(){
		const {pockets} = this.props
		const name ="pocket-name"		
		return(
			<div className="report">
				<Template title="Report"/>
				{pockets ? <div className="mainBlock">
					<ul>
						{pockets && pockets.map((el) => el.pocketName&& 
							<li key={el.id} id={el.id} >
								<div  className="listItem" >
									<div className="pocketName">{el.pocketName}</div>
									<div className="cash"><h6>Cash:</h6><p className="Pcash">{el.cashGRN}</p></div>
									<button className="button3">Del</button>
									<button className="button3">Edit</button>
								</div>
							</li> )}
					</ul>
				</div> : <div className="Loading">Loading...</div>}
			</div>
		);
	};
}
const mapStateToProps = state =>{


	return{
		pockets: state.Pockets.pockets	
	}
}


export default connect(mapStateToProps,{})(Report)