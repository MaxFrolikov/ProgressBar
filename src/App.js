import {Input} from "./components/Input/Input";
import {ProgressBarList} from "./components/ProgressBar/ProgressBarList";
import {HeaderDate} from "./components/HeaderDate/HeaderDate";

export function App() {
	return (
		<div>
			<HeaderDate/>
			<Input />
			<ProgressBarList />
		</div>
	);
}