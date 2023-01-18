import React from "react";
import styled from "styled-components";
import LogoLight from "../assets/logo-light.svg";

const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 3.2rem;
	gap: 2rem;
`;

const LeftContainer = styled.div`
	display: flex;
	flex-grow: 1.5;
`;

const LogoImg = styled.span`
	background-image: url(${LogoLight});

	width: 15.2rem;
	height: 2.5rem;
`;

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 7.5;
	justify-content: space-between;

	& :nth-child(3) {
	}
`;

const SelectedBoardName = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 30px;
`;

const Wrapper = styled.div`
	display: flex;
`;

const AddNewTaskButton = styled.div``;
const EditTaskButton = styled.div``;

function Header({ boards, active }) {
	return (
		<>
			<HeaderContainer>
				<LeftContainer>
					<LogoImg />
				</LeftContainer>
				<RightContainer>
					<SelectedBoardName>
						{active ? boards[active].name : null}
					</SelectedBoardName>
					<Wrapper>
						<AddNewTaskButton>+ Add New Task</AddNewTaskButton>
						<EditTaskButton>...</EditTaskButton>
					</Wrapper>
				</RightContainer>
			</HeaderContainer>
		</>
	);
}

export default Header;
