import { FC } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { inputLogin, inputPassword } from "redux/reducers/moviesSlice";
import Button from "components/buttons/Button";
import Input from "components/input";
import { ILocalStorage } from "types";
import "./style.css";

const Login: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [pathTo, setPathTo] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("E-mail не может быть пустым");
  const [passwordError, setPasswordError] = useState<string>("Пароль не может быть пустым");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const dispatch = useDispatch();
  const savedDataUser: ILocalStorage = JSON.parse(localStorage.getItem("user") || "{}");
  let firstCheckField: string = savedDataUser.email;
  let secondCheckField: string = savedDataUser.password;

  useEffect(() => {
    checkData();
  }, [email, password]);

  const checkData = (): void => {
    if (firstCheckField === email && secondCheckField === password) {
      setPathTo("/room");
    } else {
      setPathTo("/error");
    }
  };

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

  const handleClick = (email:string, password: string): void => {
    dispatch(inputLogin(email))
    dispatch(inputPassword(password))
  }

  return (
    <div className="wrap__container">
      <div className="wrap__container-content">
        <div className="title">
          <span className="title__name">Войдите</span>
          <span className="title__subname">Чтобы получить доступ</span>
        </div>
        <div className="forms">
          {emailDirty && emailError && (
            <div className="error">{emailError}</div>
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
            <div className="error">{passwordError}</div>
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
          <div className="container">
            <NavLink to={pathTo}>
              <Button nameButton={"Авторизироваться"} className={'container__button__activate'} onClick={()=>handleClick(email, password)} />
            </NavLink>
          </div>
        </div>
        <div className="registration">
          <span className="registration__name">Нет аккаунта ?</span>
          <NavLink to="/reg" className="registration__link">
            <span className="registration__text">Зарегистрируйтесь</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
