import React from "react";
import styled from "styled-components";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";

import Button from "./Button";

const HeaderContainer = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.background.grayDark};
`;

const LeftContainer = styled.div`
	display: flex;
	width: 30rem;
`;

const LogoImg = styled.span`
	background-image: ${(props) =>
		props.theme === "light" ? `url(LogoLight)` : `url(LogoDark)`}

	width: 15.2rem;
	height: 2.5rem;

	margin: 3.2rem;
`;

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
	justify-content: space-between;

	// & :nth-child(3) {
	// }

	border: 0.1rem solid;
`;

const SelectedBoardName = styled.div`
	font-size: 2.4rem;
	padding-left: 2.4rem;
`;

const Wrapper = styled.div`
	display: flex;
`;

const AddNewTaskButton = styled.div``;
const EditTaskButton = styled.div``;

function Header({ boards, active }) {
	console.log(boards[active].name, active);
	return (
		<>
			<HeaderContainer>
				<LeftContainer>
					<LogoImg />
				</LeftContainer>
				<RightContainer>
					<SelectedBoardName>
						{active || active === 0 ? boards[active].name : null}
					</SelectedBoardName>
					<Wrapper>
						<AddNewTaskButton>
							<Button>+Add New Task</Button>
						</AddNewTaskButton>
						<EditTaskButton>...</EditTaskButton>
					</Wrapper>
				</RightContainer>
			</HeaderContainer>
		</>
	);
}

export default Header;
