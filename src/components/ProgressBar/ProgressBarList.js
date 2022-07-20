import {useDispatch, useSelector} from "react-redux";
import {ProgressBar} from "./ProgressBar";
import {removeBarAction} from "../../store/reducer";

export const ProgressBarList = () => {
	const dispatch = useDispatch()
	const barList = useSelector(state => state.barList)

	const removeBar = (id) => {
		dispatch(removeBarAction(id))
	}

	return (
		barList.map(bar =>
			<ProgressBar
				key = {Math.round(Math.random()*100000)}
				bar = {bar}
				removeBar = {removeBar}
			/>
		)
	)
}