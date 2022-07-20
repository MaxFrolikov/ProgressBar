import {DateText, TextContainer} from "./HeaderDate.styled";
import {useTime} from "../Hooks/useTime";

export const HeaderDate = () => {
	const date = useTime()

	return (
		<TextContainer>
			<DateText>
				Date: {date.monthDay}.{date.month}.{date.year}
			</DateText>
			<DateText>
				Time: {date.hours}:{date.minutes}:{date.seconds}
			</DateText>
		</TextContainer>
	)
}