import "./style.css";
import { FC } from "react";
import { NavLink } from "react-router-dom";
const Error: FC = (): JSX.Element => {
	return (
		<div className="container">
			<div className="container__content">
				<span className="errorSentenses">
					Упс, возможно Вы еще не зарегестрировались, пожалуйста, пройдите
					процедуру регистрации и продолжите работу.
				</span>
				<NavLink to="/reg">
					<button className="button"><span>Зарегистрироваться</span></button>
				</NavLink>
			</div>
		</div>
	);
};

export default Error;
