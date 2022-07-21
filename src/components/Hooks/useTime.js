import {useEffect, useState} from "react";

export const useTime = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => clearInterval(interval)
	})

	return {
		day: Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)),
		weekDay: date.getDay(),
		monthDay: date.getDate(),
		month: (date.getMonth() + 1).toString().length === 2 ? date.getMonth() : '0' + date.getMonth(),
		year: date.getFullYear(),

		hours: date.getHours(),
		minutes: date.getMinutes().toString().length === 2 ? date.getMinutes() : '0' + date.getMinutes(),
		seconds: date.getSeconds().toString().length === 2 ? date.getSeconds() : '0' + date.getSeconds(),
	}
}