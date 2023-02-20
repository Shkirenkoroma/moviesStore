import "./style.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { useState, useEffect } from "react";
import Button from "components/buttons/Button";
import Input from "components/input";
import Checkbox from "components/checkbox";

const Registration: FC = (): JSX.Element => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string | number>("");
	const [checked, setChecked] = useState<boolean>(false);
	const [emailDirty, setEmailDirty] = useState<boolean>(false);
	const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<string>("E-mail не может быть пустым");
	const [passwordError, setPasswordError] = useState<string>("Пароль не может быть пустым");
	const [formValid, setFormValid] = useState<boolean>(false);

	useEffect(() => {
		if (emailError || passwordError || !checked) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError, checked]);

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("Некорректный e-mail");
		} else {
			setEmailError("");
		}
	};

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value);
		if (e.target.value.length < 4) {
			setPasswordError("Пароль должен содержать не менее 4 символов");
		} else {
			setPasswordError("");
		}
	};

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
		}
	};

	const setToLocalStorage = (e: React.MouseEvent<HTMLButtonElement>): void => {
		let data = { email: email, password: password };
		localStorage.setItem("user", JSON.stringify(data));
	};

	return (
		<div className="wrap__container">
			<div className="wrap__container-content">
				<div className="title">
					<span className="title__name">Регистрация</span>
					<span className="title__subname">Заполните поля</span>
				</div>
				<div className="forms">
					{emailDirty && emailError && (
						<div style={{ color: "red" }}>{emailError}</div>
					)}
					<Input
						setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
							emailHandler(e)
						}
						onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
						placeholder="Введите почту"
						value={email}
						className="container__input"
						name="email"
						setEmailDirty={setEmailDirty}
					/>
					{passwordDirty && passwordError && (
						<div style={{ color: "red" }}>{passwordError}</div>
					)}
					<Input
						onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurHandler(e)}
						setValue={(e: React.ChangeEvent<HTMLInputElement>) => passwordHandler(e)}
						placeholder="Введите пароль"
						value={password}
						className="container__input"
						name="password"
					/>
					<div className="checkData">
						<Checkbox
							id="checkbox"
							type="checkbox"
							checked={checked}
							setChecked={() => setChecked(!checked)}
						/>
						<label htmlFor="checkData">
							Соглашение об обработке персональных данных
						</label>
					</div>
					<NavLink to="/excelent">
						<Button onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								setToLocalStorage(e)
							}
							nameButton="Зарегистрироваться"
							className="container__button"
							disabled={!formValid}/>
					</NavLink>
				</div>
				<div className="registration"></div>
			</div>
		</div>
	);
};

export default Registration;