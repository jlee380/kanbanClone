import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import { COLORS } from "../../theme/styles";
import { BoardContext } from "../../App";
import IconCrossSvg from "../../assets/icon-cross.svg";
import Button from "../Button";

const Title = styled.h2``;

const Label = styled.label`
	margin: 2.4rem 0 0.8rem 0;
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
	width: 1.5rem;
	height: 1.5rem;
	background-color: transparent;
	border: none;
`;

function Testing() {
	const { columns } = useContext(BoardContext);
	const columnNames = columns.map((c) => c.name);
	const currentColumnLen = columnNames.length;

	const [formValues, setFromValues] = useState(columnNames);

	const initialValues = {
		boardName: "",
		existingColumns: [...columnNames],
	};

	const validationSchema = yup.object().shape({
		boardName: yup.string().required("Can't be empty"),
		existingColumns: yup.array().of(yup.string().required("Required")),
	});

	function onSubmit(values) {
		setTimeout(() => {
			// alert(JSON.stringify(values, null, 2));
			console.log(values);
		}, 300);
	}
	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log("submmitted", values)}
				validationSchema={validationSchema}
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
						<FieldArray
							name="users"
							render={(arrayHelpers) => (
								<div>
									<pre>{JSON.stringify(errors, null, 2)}</pre>
									{console.log("touched", touched)}
									{values.users && values.users.length > 0
										? values.users.map((user, index) => (
												<div key={index}>
													<label
														for={
															values.users[index]
																.userName
														}>
														User Name
													</label>
													<Field
														name={`users.${index}.userName`}
													/>
													<FieldArray
														id={`users.${index}.hobbies`}
														name={`users.${index}.hobbies`}
														render={(
															arrayHelpers2
														) => {
															// console.log("q.index", timelogs[index].categories);

															return (
																<div>
																	{values
																		.users[
																		index
																	].hobbies &&
																	values
																		.users[
																		index
																	].hobbies
																		.length >
																		0 ? (
																		<div
																			style={{
																				marginLeft: 10,
																				marginTop: 10,
																			}}>
																			<label
																				for={
																					values
																						.users[
																						index
																					]
																						.hobbies
																				}>
																				Hobby
																			</label>
																			{values.users[
																				index
																			].hobbies.map(
																				(
																					q,
																					index2
																				) => {
																					//console.log('q',index)
																					return (
																						<div>
																							<Field
																								id={`users.${index}.hobbies.${index2}.hobby`}
																								name={`users.${index}.hobbies.${index2}.hobby`}
																							/>
																							<button
																								type="button"
																								onClick={() =>
																									arrayHelpers2.remove(
																										index2
																									)
																								}>
																								-
																							</button>
																							<button
																								type="button"
																								onClick={() =>
																									arrayHelpers2.push(
																										""
																									)
																								}>
																								+
																							</button>
																						</div>
																					);
																				}
																			)}
																		</div>
																	) : (
																		<button
																			type="button"
																			onClick={() =>
																				arrayHelpers2.push(
																					{}
																				)
																			}>
																			Add
																			new
																			hobby
																		</button>
																	)}
																</div>
															);
														}}
													/>
												</div>
										  ))
										: null}
									<div>
										<button type="submit">Submit</button>
									</div>
								</div>
							)}
						/>
					</Form>
					// <Form>
					// 	<Title>Add New Board</Title>
					// 	<Label htmlFor="boardName">Name</Label>
					// 	{console.log("touched", touched)}
					// 	{console.log("error", errors)}
					// 	<Input
					// 		placeholder="e.g. Web Design"
					// 		// id="boardName"
					// 		name="boardName"
					// 		id="boardName"
					// 		$valid={touched.boardName && !errors.boardName}
					// 		error={touched.boardName && errors.boardName}
					// 	/>
					// 	<Label htmlFor="existingColumns" columns={columns}>
					// 		Columns
					// 	</Label>
					// 	<FieldArray
					// 		id="existingColumns"
					// 		name="existingColumns"
					// 		render={(arrayHelper2) => (
					// 			<>
					// 				{values.existingColumns &&
					// 				values.existingColumns.length >= 0
					// 					? values.existingColumns.map(
					// 							(column, i) => {
					// 								return (
					// 									<React.Fragment>
					// 										<Input
					// 											id={`existingColumns[${i}]`}
					// 											name={`existingColumns[${i}]`}
					// 											$valid={
					// 												touched.column &&
					// 												!errors.column
					// 											}
					// 											error={
					// 												touched.column &&
					// 												errors.column
					// 											}
					// 										/>

					// 										<IconCross
					// 											onClick={() =>
					// 												arrayHelper2.remove(
					// 													i
					// 												)
					// 											}
					// 										/>
					// 									</React.Fragment>
					// 								);
					// 							}
					// 					  )
					// 					: null}
					// 				<BoardButton
					// 					column="column"
					// 					onClick={() => arrayHelper2.push("")}>
					// 					+ Add New Column
					// 				</BoardButton>
					// 			</>
					// 		)}
					// 	/>
					// 	<BoardButton type="submit">
					// 		Create New Board
					// 	</BoardButton>
					// </Form>
				)}></Formik>
		</>
	);
}

export default Testing;
