import axios, { AxiosResponse } from "axios";
import { IResponseApi } from "types";
import { basicUrl, chapterReviews, chapterTopMovies, endPoint } from "../constants/index";

export const getMoviesArray = async (): Promise<AxiosResponse<IResponseApi>> => {
	const url = `${basicUrl}/${chapterTopMovies}/${endPoint}`;
	const response = await axios
		.get(url)
		.then((response) => response.data.items);
	return response;
};

export const getReview = async ( id: number ): Promise<AxiosResponse<IResponseApi>> => {
	const url = `${basicUrl}/${chapterReviews}/${endPoint}/${id}`;
	const response = await axios.get(url).then((response) => response.data.items);
	return response;
};
