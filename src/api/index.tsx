import axios from "axios";

export const getMoviesArray = async () => {
	const baseUrl = "https://imdb-api.com/en/api/top250movies/k_0904k8jd";
	const response = await axios.get(baseUrl).then((response) => response.data.items);
	return response;
};

export const getReview = async (id:number) => {
	const url = `https://imdb-api.com/en/api/reviews/k_0904k8jd/${id}`;
	const response = await axios.get(url).then((response) => response.data.items);
	return response;
};
