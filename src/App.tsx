import {JSX} from "react";
import logo from './assets/images/header/logo.svg';
import bg1 from './assets/images/offers/background_1.svg';
import bg2 from './assets/images/offers/background_2.svg';
import bg3 from './assets/images/offers/background_3.svg';
import bg4 from './assets/images/offers/background_4.svg';
import spaceship from './assets/images/footer/spaceship.svg';
import './App.scss';
import './index.scss';


export interface iOffer {
	title: string;
	subtitle: string;
	image: string;
}

const App = () => {
	const offers: iOffer[] = [
		{
			title: 'Move the borders of reality!',
			subtitle: 'Go on a space adventure - it\'s possible with us!',
			image: bg1
		},
		{
			title: 'Space is not just stars and planets',
			subtitle: 'Go on a space adventure',
			image: bg2
		},
		{
			title: 'For those who dream of stars',
			subtitle: 'Our offer: make your dream come true',
			image: bg3
		},
		{
			title: 'Fulfill your fantastic dreams',
			subtitle: 'Space has never been so close',
			image: bg4
		}
	];

	const getOffers: JSX.Element[] = offers.map((offer, index) => {
		const background = `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${offer.image}) no-repeat center/cover`

			return (
				<div key={index} className="offers__card" style={{ background: background }}>
					<h2 className="offers__card-title">{ offer.title }</h2>
					<span className="offers__card-subtitle">{ offer.subtitle }</span>
					<button className="offers__card-button button">Learn more</button>
				</div>
			)
		}
	);


	return (
		<div className="app">
			<header className="header">
				<div className="menu">
					<img className="menu__logo" src={logo} alt="logo"/>

					<nav className="menu__nav">
						<div className="menu__nav-item">Home</div>
						<div className="menu__nav-item">Products</div>
						<div className="menu__nav-cart"></div>
					</nav>
				</div>

				<div className="banner">
					<p className="banner__title">
						Discover the vast expanses of <span>space</span>
					</p>

					<p className="banner__subtitle">
						Where the possibilities are <span>endless!</span>
					</p>

					<button className="banner__button button">Learn more</button>
				</div>
			</header>

			<main className="main">
				<section className="offers">
					<h1 className="offers__title">Offers</h1>
					<div className="offers__wrapper">{getOffers}</div>
				</section>

				<section className="info">
					<h1 className="info__title">Embark on a space journey</h1>
					<input type="checkbox" id="read-more" className="info__checkbox" />
					<p className="info__text">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
					<p className="info__hidden-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

					<label htmlFor="read-more" className="info__read-more"></label>
				</section>
			</main>

			<footer className="footer">
				<img className="footer__logo" src={spaceship} alt="spaceship" />
				<span className="footer__subtitle">Exciting space adventure!</span>
			</footer>
		</div>
	)
}

export default App;
