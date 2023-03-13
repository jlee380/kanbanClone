import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import { COLORS } from "../../theme/styles";
import { BoardContext } from "../../App";
import IconCrossSvg from "../../assets/icon-cross.svg";
import Button from "../Button";
import TextError from "./TextError";

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

const IconCross = styled.button`
	background-image: url(${IconCrossSvg});
	display: block;
	width: 1.6rem;
	height: 1.6rem;
`;

function CreateNewBoard() {
	const { columns } = useContext(BoardContext);
	const columnNames = columns.map((c) => c.name);

	const [formValues, setFromValues] = useState(columnNames);

	const initialValues = {
		boardName: "",
		existingColumns: columnNames,
	};

	const validationSchema = yup.object().shape({
		boardName: yup.string().required("Can't be empty"),
		existingColumns: yup.array().required("Required"),
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
					onSubmit={onSubmit}
					render={({
						values,
						errors,
						touched,
						handleSubmit,
						isSubmitting,
						validating,
						valid,
					}) => (
						<Form>
							<Title>Add New Board</Title>
							<BoardNameContainer>
								<InputContainer>
									<FieldArray
										name="boardName"
										id="boardName"
										render={(arrayHelper) => (
											<>
												{values.boardName &&
												values.boardName.length > 0
													? values.boardName.map(
															(boardN, i) => (
																<React.Fragment
																	key={i}>
																	<Label htmlFor="boardName">
																		Name
																	</Label>
																	<Input
																		placeholder="e.g. Web Design"
																		id="boardName"
																		valid={
																			touched.boardName &&
																			!errors.boardName
																		}
																		error={
																			touched.boardName &&
																			errors.boardName
																		}
																	/>
																</React.Fragment>
															)
													  )
													: null}
											</>
										)}
									/>
								</InputContainer>
							</BoardNameContainer>
							<ColumnsContainer>
								<Label
									htmlFor="existingColumns"
									columns={columns}>
									Columns
								</Label>
								<FieldArray
									id="existingColumns"
									name="existingColumns"
									render={(arrayHelper2) => (
										<>
											{values.existingColumns &&
											values.existingColumns.length >= 0
												? values.existingColumns.map(
														(column, i) => {
															return (
																<InputDeleteContainer
																	key={i}>
																	<Input
																		id={
																			column
																		}
																		name={`existingColumns.${i}`}
																		$valid={
																			touched.column &&
																			!errors.column
																		}
																		error={
																			touched.column &&
																			errors.column
																		}
																	/>

																	<IconCross />
																	<ErrorMessage
																		name="existingColumns"
																		component={
																			TextError
																		}
																	/>
																</InputDeleteContainer>
															);
														}
												  )
												: null}
											<BoardButton
												column="column"
												onClick={() =>
													arrayHelper2.push()
												}>
												+ Add New Column
											</BoardButton>
										</>
									)}
								/>
							</ColumnsContainer>
							<BoardButton>Create New Board</BoardButton>
						</Form>
					)}></Formik>
			</AddNewBoardContainer>
		</>
	);
}

export default CreateNewBoard;
