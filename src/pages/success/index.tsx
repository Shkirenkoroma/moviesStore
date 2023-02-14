import ContinueButton from "../../components/buttons/continueButton";

const Success = () => {
	return (
		<div className="wrap__container">
			<div className="wrap__container-content">
				<div className="title">
					<span className="title__name">Спасибо за регистрацию</span>
					<ContinueButton />
				</div>
			</div>
		</div>
	);
};

export default Success;
