import { SET_MOVIES } from "../constans";

const initialState = {
	movies: [],
};

const moviesData = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case SET_MOVIES:
			return {
				...state,
				movies: [...state.movies, ...payload],
			};
		default:
			return state;
	}
};

export default moviesData;
