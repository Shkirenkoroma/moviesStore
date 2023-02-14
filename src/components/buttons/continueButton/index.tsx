import "./style.css";
import { NavLink } from "react-router-dom";
import "./style.css";

const ContinueButton = () => {
	return (
		<div className="container">
			<NavLink to="/">
				<button className="container__button">
					Теперь Вы можете войти в личный кабинет и продолжить работу
				</button>
			</NavLink>
		</div>
	);
};

export default ContinueButton;
