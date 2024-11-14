import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
	return (
		<>
			<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10'>
				<div className='w-200 order-2 md:order-1 md:w-1/2'>
					{" "}
					<div className='space-y-10'>
						<h1 className='mt-10 text-4xl font-bold'>
							Dazzling Moments Await!
						</h1>
						<p className='text-xl'>
							Get ready for a dhamaka of entertainment! Dive into the vibrant
							world of Bollywood - where romance sizzles, action thrills, and
							dance numbers leave you wanting more. We've got the latest
							releases, cult classics, and everything in between. So grab some
							popcorn, settle in, and get ready for a dose of pure Bollywood
							magic!
						</p>
						<label className='input input-bordered flex items-center gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='w-4 h-4 opacity-70'>
								<path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
								<path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
							</svg>
							<input type='text' className='grow' placeholder='Email' />
						</label>
						<div>
							<a href='/movies'>
								<button className='btn btn-secondary'>Get started</button>
							</a>
						</div>
					</div>
				</div>
				<div className='order-1 w-200 justify-center mx-81 pl-28'>
					<img
						src={banner}
						width={440}
						height={440}
						className='margin-50px'
						alt='image'
					/>
				</div>
			</div>
		</>
	);
}

export default Banner;
