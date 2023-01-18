import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.text};
		transition: all 0.50s linear;

		
	}
	div, a {
		font-family:'Plus Jakarta Sans', sans-serif;
		font-weight: 700;
		font-size: 15px;
		line-height: 19px;
	}
`;
