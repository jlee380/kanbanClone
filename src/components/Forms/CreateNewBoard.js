import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { COLORS } from "../../theme/styles";
import { BoardContext } from "../../App";
import IconCrossSvg from "../../assets/icon-cross.svg";
import Button from "../Button";

const AddNewBoardContainer = styled.div``;
const Title = styled.h2``;
const BoardNameContainer = styled.div``;
const ColumnsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const Label = styled.label`
	margin: 2.4rem 0 0.8rem 0;
`;

const InputDeleteContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.6rem;
	align-items: center;
	margin-bottom: 1.2rem;
`;

const BoardButton = styled(Button)`
	width: 100%;
	height: 3.9rem;
	margin-bottom: ${(props) => (props.column ? "2.4rem" : 0)};
	background-color: ${(props) => (props.column ? COLORS.LIGHTGRAY : null)};
	color: ${(props) => (props.column ? COLORS.MAINPURPLE : null)};
`;

const Input = styled(Field)`
	border: 1px solid ${COLORS.MEDIUMGRAY};
	border-radius: 4px;
	padding: 0.8rem 1.6rem;
	height: 4.1rem;
	flex-grow: 1;

	${({ error }) =>
		error &&
		css`
			border: 1px solid rgb(191, 49, 12);

			&:focus,
			&:active {
				outline: none;
			}
		`};
`;

const IconCross = styled.span`
	background-image: url(${IconCrossSvg});
	display: block;
	width: 1.6rem;
	height: 1.6rem;
`;

function CreateNewBoard() {
	const { columns } = useContext(BoardContext);
	const columnNames = columns.map((c) => c.name);

	const initialValues = {
		boardName: "",
		existingColumns: columnNames,
	};

	const validationSchema = yup.object().shape({
		boardName: yup.string().required("Can't be empty"),
		existingColumns: yup.array().min(1, "Minimum 1"),
	});

	function onSubmit(values) {
		console.log("Submitted", values);
	}
	return (
		<>
			<AddNewBoardContainer>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}>
					{({
						values,
						errors,
						touched,
						handleSubmit,
						isSubmitting,
						validating,
						valid,
					}) => {
						return (
							<Form>
								{console.log(
									"touched",
									touched,
									"error",
									errors
								)}
								<Title>Add New Board</Title>
								<BoardNameContainer>
									<InputContainer className="form-control">
										<Label htmlFor="boardName">Name</Label>
										<Input
											placeholder="e.g. Web Design"
											id="boardName"
											name="boardName"
											valid={
												touched.boardName &&
												!errors.boardName
											}
											error={
												touched.boardName &&
												errors.boardName
											}
										/>
										{/* <ErrorMessage name={name} component={TextError} /> */}
									</InputContainer>
									{/* <FormikControl
								control="input"
								type="text"
								label="Name"
								name="boardName"
							/> */}
								</BoardNameContainer>
								<ColumnsContainer className="form-control">
									<Label
										htmlFor="existingColumns"
										columns={columns}>
										Columns
									</Label>
									{columns.map((column) => {
										return (
											<InputDeleteContainer>
												<Input
													id="existingColumns"
													name="existingColumns"
													valid={
														touched.existingColumns &&
														!errors.existingColumns
													}
													error={
														touched.existingColumns &&
														errors.existingColumns
													}
													value={column.name}
												/>
												<IconCross />
											</InputDeleteContainer>
										);
									})}
									<BoardButton column="column">
										+ Add New Column
									</BoardButton>
								</ColumnsContainer>
								<BoardButton>Create New Board</BoardButton>
							</Form>
						);
					}}
				</Formik>
			</AddNewBoardContainer>
		</>
	);
}

export default CreateNewBoard;
