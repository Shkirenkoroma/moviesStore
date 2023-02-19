import "./style.css";
import Input from "../../components/input/index";
import OpenButton from "../../components/buttons/openButton";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Login: FC = (): JSX.Element => {
	const [email, setEmail] = useState<string | undefined>("");
	const [password, setPassword] = useState<string | number | undefined>("");
	const [pathTo, setPathTo] = useState("");
	const [emailError, setEmailError] = useState("E-mail не может быть пустым");
	const [passwordError, setPasswordError] = useState(
		"Пароль не может быть пустым",
	);
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const savedDataUser = JSON.parse(localStorage.getItem("user") || "{}");
	let firstCheckField = savedDataUser.email;
	let secondCheckField = savedDataUser.password;

	useEffect(() => {
		checkData();
	}, [email, password]);

	const checkData = () => {
		if (firstCheckField === email && secondCheckField === password) {
			console.log("Все хорошо, ты проходишь на главную страницу");
			setPathTo("/room");
		} else {
			console.log("Вы еще не зарегистрировлись");
			setPathTo("/error");
		}
	};

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("Некорректный e-mail");
		} else {
			setEmailError("");
		}
	};

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		if (e.target.value.length < 4) {
			setPasswordError("Пароль должен содержать не менее 4 символов");
		} else {
			setPasswordError("");
		}
	};

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
		}
	};

	return (
		<div className="wrap__container">
			<div className="wrap__container-content">
				<div className="title">
					<span className="title__name">Войдите</span>
					<span className="title__subname">Чтобы получить доступ</span>
				</div>
				<div className="forms">
					{emailDirty && emailError && (
						<div style={{ color: "red" }}>{emailError}</div>
					)}
					<Input
						placeholder={"Введите почту"}
						value={email}
						className="container__input"
						setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
							emailHandler(e)
						}
						name="email"
						onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
					/>
					{passwordDirty && passwordError && (
						<div style={{ color: "red" }}>{passwordError}</div>
					)}
					<Input
						placeholder={"Введите пароль"}
						value={password}
						onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
						setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
							passwordHandler(e)
						}
						name="password"
						className="container__input"
					/>
					<NavLink to={pathTo}>
						<OpenButton nameButton={"Авторизироваться"} />
					</NavLink>
				</div>
				<div className="registration">
					<span className="registration__name">Нет аккаунта ?</span>
					<NavLink to="/reg" className="registration__link">
						<span className="registration">Зарегистрируйтесь</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Login;
