import axios from "axios";
import { basicUrl, chapterReviews, chapterTopMovies, endPoint } from "../constants/index";

export const getMoviesArray = async () => {
	const baseUrl = `${basicUrl}/${chapterTopMovies}/${endPoint}`;
	const response = await axios
		.get(baseUrl)
		.then((response) => response.data.items);
	return response;
};

export const getReview = async (id: number) => {
	const url = `${basicUrl}/${chapterReviews}/${endPoint}/${id}`;
	const response = await axios.get(url).then((response) => response.data.items);
	return response;
};
