const items = {
	status:'',
	errors:'',
	data: {},
	reviews: [],
};

export const moviesReducer = (state = items, action: any) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return { ...state, reviews: [...state.reviews, action.payload] };
		default:
			return state;
	}
};
