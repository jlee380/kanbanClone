import React from "react";
import LogoLight from "../assets/logo-light.svg";

function Header() {
	return (
		<div className="logoGroup">
			<img src={LogoLight} />
			<span style={{ textAlign: "start" }}>Kanban</span>
		</div>
	);
}

export default Header;
