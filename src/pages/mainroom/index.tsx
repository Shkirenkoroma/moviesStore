import "./style.css";
import Movie from "./Movie";
import ReactPaginate from "react-paginate";
import logo from "assets/img/background.png";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { useActions } from "redux/hooks/useActions";
import { addMovieCard, getItemId } from "redux/reducers/moviesSlice";
import { loginData } from "common/utils";
import Button from "components/buttons/Button";

const MainRoom: FC = (): JSX.Element => {
	const stateData = useSelector((state: any) => state.movies.movies);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [currentItems, setCurrentItems] = useState<Array<any>>([]);
	const [pageCount, setPageCount] = useState<number>(0);
	const [itemOffset, setItemOffset] = useState<number>(0);
	const itemsPerPage = 6;
	const dispatch = useDispatch();
	const { getMovies }:any = useActions();

	const setDataMovie = (item: any) => {
		setModalActive(!modalActive);
		dispatch(addMovieCard(item));
		dispatch(getItemId(item.id));
	};

	useEffect(() => {
		dispatch(getMovies());
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(stateData.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(stateData.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, stateData]);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % stateData.length;
		setItemOffset(newOffset);
	};

	const removeItem = () => {
		localStorage.removeItem("user");
	};

	return (
		<div className="container__main">
			<div className="header">
				<img src={logo} className="label" alt="logo" />
				<nav className="navigation">
					<ul className="list">
						<li className="list__item">Главная</li>
						<li className="list__item">Новинки</li>
						<li className="list__item">Подборки</li>
						<li className="list__item">Фильмы</li>
						<li className="list__item">Сериалы</li>
					</ul>
				</nav>
				<div className="user">
					<div className="user__serverdata">
						<span className="span">{loginData.email}</span>
						<span className="welcome">Добро пожаловать!</span>
					</div>
				
						<NavLink to="/*">
							<Button className="buttonToExit" onClick={() => removeItem()} nameButton="Выйти" />
						</NavLink>
				
				</div>
			</div>
			{currentItems.length ? (
				<div className="movies__boxes">
					{currentItems.map((item: any) => (
						<Movie
							key={item.id}
							item={item}
							setDataMovie={() => setDataMovie(item)}
						/>
					))}
				</div>
			) : (
				<Oval
					height={80}
					width={80}
					color="#fdfdfd"
					wrapperClass="preloader"
					visible={true}
					ariaLabel="oval-loading"
					secondaryColor="#fdfdfd"
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			)}
			<Modal modalActive={modalActive} setModalActive={setModalActive} />
			{currentItems.length ? (
				<ReactPaginate
					breakLabel="..."
					nextLabel=" >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel="<"
					containerClassName="pagination"
					pageLinkClassName="page-num"
					previousLinkClassName="page-num"
					nextLinkClassName="page-num"
					activeLinkClassName="active"
				/>
			) : (
				""
			)}
		</div>
	);
};

export default MainRoom;
