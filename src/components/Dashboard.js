import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
	background-color: ${(props) => props.theme.background.grayDarker};
`;

function Dashboard({ boards, active }) {
	return (
		<>
			<DashboardContainer>
				{active || active === 0 ? boards[active].name : null}
			</DashboardContainer>
		</>
	);
}

export default Dashboard;
