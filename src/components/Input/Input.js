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
	const defaultUserInput = {
		name: '',
		startDate: '',
		finishDate: '',
	}

	console.log()

	const [userInput, setUserInput] = useState(defaultUserInput)

	const bar = {
		name: userInput.name ? userInput.name : 'New Progress Bar',
		start: userInput.startDate,
		finish: userInput.finishDate,
		id: Date.now()
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(addBarAction(bar))
		setUserInput(defaultUserInput)
	}

	const handleChange = (e) => {
		const value = e.currentTarget.value
		const newInput = {}
		
		if(e.currentTarget.id === 'name') newInput.name = value
			else newInput.name = userInput.name
		if(e.currentTarget.id === 'startDate') newInput.startDate = value
			else newInput.startDate = userInput.startDate
		if(e.currentTarget.id === 'finishDate') newInput.finishDate = value
			else newInput.finishDate = userInput.finishDate

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