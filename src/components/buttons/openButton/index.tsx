import { useDispatch } from "react-redux";
import { getMovies } from "../../../redux/actions";
import "./style.css";

const OpenButton = ({ nameButton }: any) => {
	const dispatch = useDispatch();
	const handleMovies = () => {
		dispatch(getMovies())
	}
	return (
		<div className="container">
			<button className="container__button" onClick={handleMovies}>{nameButton}</button>
		</div>
	);
};

export default OpenButton;
