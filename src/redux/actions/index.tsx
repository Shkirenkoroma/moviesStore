import { GET_MOVIES } from "../constans";
import { SET_MOVIES } from "../constans";

export const getMovies = () => (
   { type:GET_MOVIES }
)
export const setMovies = (payload:any) => (
   { type:SET_MOVIES, payload }
)