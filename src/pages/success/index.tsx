import { NavLink } from "react-router-dom";
import Button from "../../components/buttons/Button";

const Success = () => {
	return (
		<div className="wrap__container">
			<div className="wrap__container-content">
				<div className="title">
					<span className="title__name">Спасибо за регистрацию</span>
					<NavLink to="/">
						<Button
							nameButton="Авторизироваться"
							className="container__button"
						/>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Success;
