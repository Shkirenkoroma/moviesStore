import "./style.css";
import { FC } from "react";
import TextArea from "../../../components/textarea/index";
import { useSelector } from "react-redux";

const Modal: FC<any> = ({ modalActive, setModalActive }): JSX.Element => {
	const reviews = useSelector((state: any) => state.moviesReducer.reviews);
	const movieCard = useSelector((state: any) => state.moviesReducer.data);
console.log('state', useSelector(state=>state))
	return (
		<div
			className={modalActive ? "modal__container-active" : "modal__container"}
			onClick={() => setModalActive(!modalActive)}
		>
			<div
				className="modal__container__content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="movieBox__fullTitle"></div>
				<div className="movieBox__image-card">
					<img src={movieCard.image} alt="label" />
				</div>
				<div className="movieBox__reviews">
					<div>
						{reviews?.map((review: any, index: number) => (
							<div key={index} className="movieBox__reviews__container">
								<div className="movieBox__reviews__row">
									<div className="movieBox__username">{review.username}</div>
									<div className="movieBox__review-date">{review.date}</div>
								</div>
								<div className="movieBox__review">{review.content}</div>
							</div>
						))}
					</div>
				</div>
				<div className="fieldReview">
					<TextArea />
				</div>
			</div>
		</div>
	);
};

export default Modal;
