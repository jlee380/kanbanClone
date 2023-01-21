import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import IconEdit from "../assets/icon-vertical-ellipsis.svg";

import Button from "./Button";

import { ThemeContext } from "../contexts/ThemeStore";

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
		props.theme === "light" ? `url(${LogoLight})` : `url(${LogoDark})`};

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
	align-items: center;
	gap: 2rem;
	margin-right: 2rem;

	cursor: pointer;
`;

const EditButton = styled.span`
	background-image: url(${IconEdit});
	width: 0.5rem;
	height: 2rem;
	cursor: pointer;
`;

function Header({ boards, active }) {
	const { theme } = useContext(ThemeContext);
	return (
		<>
			<HeaderContainer>
				<LeftContainer>
					<LogoImg theme={theme} />
				</LeftContainer>
				<RightContainer>
					<SelectedBoardName>
						{active || active === 0 ? boards[active].name : null}
					</SelectedBoardName>
					<Wrapper>
						<Button>+Add New Task</Button>
						<EditButton />
					</Wrapper>
				</RightContainer>
			</HeaderContainer>
		</>
	);
}

export default withTheme(Header);
