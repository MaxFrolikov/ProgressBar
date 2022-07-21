import {useEffect, useState} from "react";

export const useProgress = (startTime, finishTime) => {

	const getProgress = () => {
		const now = Date.now()
		const start = new Date(startTime)
		const finish = new Date(finishTime)

		const progress = start > finish ?
			(finish - now) / (finish - start) * 100
			:
			(start - now) / (start - finish) * 100

		return progress <= 100 ? progress : 100
	}

	const [progress, setProgress] = useState(getProgress())

	useEffect(() => {
		const interval = setTimeout(() => {
			setProgress(getProgress())
		}, 1000)
		return () => clearInterval(interval)
	})

	return progress
}