import "./style.css";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "redux/reducers/moviesSlice";

const TextArea: FC = (): JSX.Element => {
	const [value, setValue] = useState<string>("");
	const [valid, setValid] = useState<boolean>(true);
	const dispatch = useDispatch();

	const addData = (e: React.MouseEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (valid) {
			dispatch(addComment(value));
			setValue("");
		}
	};

	const checkValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		if (e.target.value.length < 20) {
			setValid(false);
		} else {
			setValid(true);
		}
	};

	return (
		<div className="container__text-area">
			<div className="container__content__text-area">
				<form>
					<span className="review">
						<b>Введите ваш отзыв:</b>
					</span>
					<textarea
						className={valid ? "text-area" : "text-area-active"}
						placeholder="Необходимо ввести не менее 20 символов"
						value={value}
						name="comment"
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							checkValue(e)
						}
					></textarea>
					<p>
						<input
							type="submit"
							onClick={(e: React.MouseEvent<HTMLInputElement>) => addData(e)}
						/>
					</p>
				</form>
			</div>
		</div>
	);
};

export default TextArea;
