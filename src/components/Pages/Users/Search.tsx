import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../../redux/users-Reducer';


const Search = (props: { onFilterChanged: (friend: null | boolean, term: string) => void,
	 filter: FilterType }) => {
	return (
		<Formik
			initialValues={{ search: props.filter.term, isFriend: "null" }}
			onSubmit={(values, { setSubmitting }) => {
				const isFriend = values.isFriend === 'null' ? null : values.isFriend === 'true' ? true : false;
				props.onFilterChanged(isFriend, values.search);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="input" name="search" />
					<Field as="select" name="isFriend">
						<option value="null">all</option>
						<option value="true">friend</option>
						<option value="false">not friend</option>
					</Field>
					<button type="submit" disabled={isSubmitting}>
						Submit
			</button>
				</Form>
			)}
		</Formik>
	);
};

export default Search 