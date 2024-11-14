/** @format */

import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freemovie() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get("http://localhost:4001/movie");
				const data = res.data.filter((data) => data.category === "free");
				console.log(data);
				setMovie(data);
			} catch (error) {
				console.log(error);
			}
		};
		getMovie();
	}, []);
	var settings = {
		dots: true,
		infinite: false,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
				<div>
					<h1 className='font-bold text-2xl pb-2'>Watch Free Movies...!!</h1>
					<p>
						Stream the best movies across all genres for free, anytime,
						anywhere. Enjoy a vast collection of films with no subscription
						fees, just pure entertainment at your fingertips.
					</p>
				</div>

				<div>
					<Slider {...settings} >
						{movie.map((item) => (
							<Cards item={item} key={item.id} />
						))}
					</Slider>
				</div>
			</div>
		</>
	);
}

export default Freemovie;
