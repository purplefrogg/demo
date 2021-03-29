import React from 'react';
import { Field, Form, Formik } from 'formik';
import { getUsersFilter } from '../../../redux/users-selectors';
import { useSelector } from 'react-redux';

type PropsType = {
	onFilterChanged: (friend: null | boolean, term: string) => void
}
type FormType = {
    term: string | undefined
    isFriend: 'true' | 'false' | 'null'
}
const Search: React.FC<PropsType> = (props) => {
	const filter = useSelector(getUsersFilter)
	const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		const isFriend = values.isFriend === 'null' ? null : values.isFriend === 'true' ? true : false
		props.onFilterChanged(isFriend, values.term as string)
		setSubmitting(false)
	}
	return (
		<Formik
			enableReinitialize
			initialValues={{ term: filter.term, isFriend: String(filter.friend) as "true" | "false" | "null" }}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="input" name="term" />
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