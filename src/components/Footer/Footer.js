import React from "react";
import "./footer.css";
import logo from "../../images/1.png";



export default()=>{
 	return(
		<footer className="footer">
			<div className="footerWrap">
		 		<div className="logoFooterWrap">
						<img  className="logFooter "src={logo} alt="Money Logo"/>
		 			<h2 className="slognFooter">Manage Your Money</h2>
		 		</div>	
		 	</div>	
		 </footer>
	 );
}