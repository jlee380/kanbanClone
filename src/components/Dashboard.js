import React from "react";

function Dashboard({ boards, active }) {
	return <>{active ? boards[active].name : null}</>;
}

export default Dashboard;
