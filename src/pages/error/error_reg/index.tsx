import "./style.css";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import Button from "components/buttons/Button";

const Error: FC = (): JSX.Element => {
	return (
		<div className="container">
			<div className="container__content">
				<span className="errorSentenses">
					Возникла ошибка. Возможно Вы еще не зарегестрировались или не корректно ввели данные, пожалуйста, пройдите
					процедуру регистрации или введите еще раз данные акканута.
				</span>
				<NavLink to="/reg">
					<Button className="button" nameButton="Зарегистрироваться" />
				</NavLink>
			</div>
		</div>
	);
};

export default Error;
