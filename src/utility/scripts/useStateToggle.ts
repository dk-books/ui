import {useState} from 'react'

export interface useToggleHandlersInterface {
	on: () => void;
	off: () => void;
	toggle: (state: boolean) => void;
	reset: (state: boolean) => void;
}

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState);
	const handlers: useToggleHandlersInterface = {
		on: () => {setState(true)},
		off: () => {setState(false)},
		toggle: () => {setState(s => !s)},
		reset: () => {setState(initialState)}
	}

	return [state, handlers] as [boolean, useToggleHandlersInterface];
}

export default useToggle
