import moment from "moment";
import "moment/locale/en-gb";

const items = {
	status: "",
	errors: "",
	data: {},
	reviews: [],
};
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
						date: moment().locale("en-gb").format("LL"),
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
