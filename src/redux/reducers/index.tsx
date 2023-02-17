const items = {
	status: "",
	errors: "",
	data: {},
	reviews: [],
};
let options = { year: 'numeric', month: 'long', day: 'numeric' };
const loginData = JSON.parse(localStorage.getItem("user") || "{}");
export const moviesReducer = (state = items, action: any) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return {
				...state,
				reviews: [
					...state.reviews,
					{
						username: loginData.email,
						//@ts-ignore
						date: new Date().toLocaleDateString("en-US", options),
						content: action.payload,
					},
				],
			};
		case "ADD_MOVIE_CARD":
			return { ...state, data: { ...state.data, ...action.payload } };
		case "SET_REVIEWS":
			return { ...state, reviews: action.payload };
		default:
			return state;
	}
};
