import "./style.css";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "components/buttons/Button";

const Error: FC = (): JSX.Element => {
	return (
		<div className="container">
			<div className="container__content">
				<span className="errorSentenses">
					Упс, возможно Вы еще не зарегестрировались, пожалуйста, пройдите
					процедуру регистрации и продолжите работу.
				</span>
				<NavLink to="/reg">
					<Button className="button" nameButton="Зарегистрироваться" />
				</NavLink>
			</div>
		</div>
	);
};

export default Error;
