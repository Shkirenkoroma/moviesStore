import { FC } from "react";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import TextArea from "components/textarea";
import { IModalProps, IResponseReviews } from "types";
import "./style.css";

const Modal: FC<IModalProps> = ({ modalActive, setModalActive, loginName }): JSX.Element => {
	const reviews = useSelector((state: any) => state.movies.reviews);
	const movieCard = useSelector((state: any) => state.movies.data);

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
				{reviews.length ? (
					<div className="movieBox__reviews">
						<div>
							{reviews.map((review: IResponseReviews, index: number) => (
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
				) : (
					<Oval
						height={100}
						width={100}
						color="#cdcdcd"
						wrapperClass="preloader"
						visible={true}
						ariaLabel="oval-loading"
						secondaryColor="#cdcdcd"
						strokeWidth={2}
						strokeWidthSecondary={2}
					/>
				)}
				<div className="fieldReview">
					<TextArea loginName={loginName}/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
