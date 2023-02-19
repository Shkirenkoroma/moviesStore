import axios from "axios";

export const getMovies = async () => {
	const baseUrl = "https://imdb-api.com/en/api/top250movies/k_ohug3g2p";
	const response = await axios.get(baseUrl).then((response) => response.data.items);
	return response;
};

export const getReview = async (id:number) => {
	const url = `https://imdb-api.com/en/api/reviews/k_ohug3g2p/${id}`;
	const response = await axios.get(url).then((response) => response.data.items);
	return response;
};
