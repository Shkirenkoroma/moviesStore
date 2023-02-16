import axios from "axios";

export const getApi = async () => {
	const baseUrl = "https://imdb-api.com/en/api/top250movies/k_0caudzfv";
	const response = await axios.get(baseUrl).then((response) => response.data.items);
	return response;
};
export const getReview = async () => {
	const review = "https://imdb-api.com/en/api/reviews/k_0caudzfv/{id}";
	const response = await axios.get(review).then((response) => response.data.items);
	return response;
};
