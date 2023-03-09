import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styled, { css } from "styled-components";

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const Label = styled.label``;

function Input(props) {
	const { label, name, ...rest } = props;
	return (
		<InputContainer className="form-control">
			<Label htmlFor={name}>{label}</Label>
			<Field
				placeholder="e.g. Web Design"
				id={name}
				name={name}
				{...rest}
			/>
			{/* <ErrorMessage name={name} component={TextError} /> */}
		</InputContainer>
	);
}

export default Input;
