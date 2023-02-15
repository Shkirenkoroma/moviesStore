const items = {
	status:'',
	errors:'',
	data: {},
	reviews: [],
};

export const moviesReducer = (state = items, action: any) => {
	console.log('action', action.payload)
	switch (action.type) {
		case "ADD_COMMENT":
			return { ...state, reviews: [...state.reviews, action.payload] };
			case "ADD_MOVIE_CARD":
				return {...state, data: {...state.data, ...action.payload}}
		default:
			return state;
	}
};
