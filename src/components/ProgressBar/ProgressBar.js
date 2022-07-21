import {useSpring, animated} from "react-spring";
import useMeasure from "react-use-measure";
import {useProgress} from "../Hooks/useProgress";

import {
	BarBlock,
	BarHeader,
	Article,
	GrayText,
	Button,
	Bar,
	BarBackground,
	BarProgress,
	BarHeaderRight
} from "./ProgressBar.styled"

export const ProgressBar = ({bar, removeBar}) => {

	const progress = useProgress(bar.start, bar.finish)

	const [ref, {width}] = useMeasure()
	const props = useSpring({width: width * progress / 100})

	return(
		<BarBlock>
			<BarHeader>
				<Article>{bar.name}</Article>
				<BarHeaderRight>
					<GrayText>{String(bar.finish).split('T').join('   ')}</GrayText>
					<Button onClick={() => removeBar(bar.id)}><b>X</b></Button>
				</BarHeaderRight>
			</BarHeader>
			<Bar ref = {ref}>
				<BarBackground as={animated.div} />
				<BarProgress
					as={animated.div}
					style={{
						background: progress < 100 ? 'white' : '#36c400',
						...props
					}}
				/>
			</Bar>
		</BarBlock>
	)
}