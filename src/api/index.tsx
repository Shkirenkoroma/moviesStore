import axios from "axios";

export const getMovies = async () => {
	const baseUrl = "https://imdb-api.com/en/api/top250movies/k_z9pavqd9";
	const response = await axios.get(baseUrl).then((response) => response.data.items);
	return response;
};

export const getReview = async (id:number) => {
	// console.log('вызов функции запроса api')
	const url = `https://imdb-api.com/en/api/reviews/k_z9pavqd9/${id}`;
	const response = await axios.get(url).then((response) => response.data.items);
	return response;
};
