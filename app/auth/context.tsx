import React, { Dispatch, useReducer } from 'react';
import { initialState, AuthReducer, IAction } from './reducer';

const AuthStateContext = React.createContext(initialState);
const AuthDispatchContext = React.createContext<Dispatch<IAction>>();

export function useAuthState() {
	const context = React.useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error('useAuthState must be used within a AuthProvider');
	}

	return context;
}

export function useAuthDispatch() {
	const context = React.useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error('useAuthDispatch must be used within a AuthProvider');
	}

	return context;
}

export const AuthProvider = ({ children }) => {
	const [auth, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthStateContext.Provider value={auth}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};
