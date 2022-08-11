import {useState} from "react";
import {useDispatch} from "react-redux";
import {addBarAction} from "../../store/reducer";

import {
	Block,
	Article,
	Form,
	Button,
	NameInput,
	DateInput
} from "./Input.styled";

export const Input = () => {

	const dispatch = useDispatch()
	const initialUserInput = {
		name: '',
		startDate: '',
		finishDate: '',
	}

	const [userInput, setUserInput] = useState(initialUserInput)

	const bar = {
		name: userInput.name ? userInput.name : 'New Progress Bar',
		start: userInput.startDate,
		finish: userInput.finishDate,
		id: Date.now()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addBarAction(bar))
		setUserInput(initialUserInput)
	}

	const updateInput = (inputValue, value) => {
		const newInput = {...userInput}

		switch (inputValue){
			case 'name':
				newInput.name = value
				return newInput
			case 'startDate':
				newInput.startDate = value
				return newInput
			case 'finishDate':
				newInput.finishDate = value
				return newInput
			default: return newInput
		}
	}

	const handleChange = (e) => {
		const newInput = updateInput(
			e.currentTarget.id,
			e.currentTarget.value
		)
		setUserInput(newInput)
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Block>
					<Article>Name</Article>
					<NameInput
						id='name'
						autoComplete='off'
						value={userInput.name}
						type='text'
						onChange={handleChange}
						placeholder='New Progress Bar'
					/>
				</Block>
				<Block>
					<Article>Start Date</Article>
					<DateInput required
						id='startDate'
						value={userInput.startDate}
						type='datetime-local'
						onChange={handleChange}
					/>
				</Block>
				<Block>
					<Article>Finish Date</Article>
					<DateInput required
						id='finishDate'
						value={userInput.finishDate}
						type='datetime-local'
						onChange={handleChange}
					/>
				</Block>
				<Block>
					<Article> </Article>
					<Button><b>ADD</b></Button>
				</Block>
			</Form>
		</div>
	)
}
