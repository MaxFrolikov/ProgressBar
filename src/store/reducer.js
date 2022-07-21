const ADD_BAR = 'ADD_BAR'
const REMOVE_BAR = 'REMOVE_BAR'

const defaultState = {
	barList: []
}

export const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_BAR:
			return {...state, barList: [...state.barList, action.payload]}
		case REMOVE_BAR:
			return {...state, barList: [...state.barList.filter(bar => bar.id !== action.payload)]}
		default:
			return {...state}
	}
}

export const addBarAction = (payload) => ({type: ADD_BAR, payload})
export const removeBarAction = (payload) => ({type: REMOVE_BAR, payload})