import React, {Component} from 'react'
import CategoryItem from './CategoryItem'
import SliderNews from './SliderNews'
import SliderTrips from './SliderTrips'

import img_hotel from '../img/hotel.png'
import img_big_ben from '../img/big-ben.png'
import img_hamburger from '../img/hamburger.png'
import img_museum from '../img/museum.png'
import img_ticket from '../img/ticket.png'
import img_coffee from '../img/coffee-cup.png'


export default class MainContent extends Component{
	render(){
		return(
			<main>

			{/**  SEARCH  */}

				<div className="container">
					<div className="row">
						<div className="col-md-6 col-centered">
							<div className="search">
								<form className="form-inline md-form form-sm mt-0">
								  <i className="fa fa-search" aria-hidden="true"></i>
								  <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
								</form>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
								<div className="col-6">
								<p className="text-main">Search for your favourite:</p>
								</div>
								<div className="col-6">
								<p className="text-secondary">restaurant, museum, hotel, attractions</p>
								</div>
				</div>

				{/**  CATEGORIES  */}

				<div className=""></div>
				<div className="separator"></div>
				<div className="container">
					<div className="row">

						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_hotel}
								cat_title="Accomodation"
								cat_subtitle="perfect solution"
								cat_text="hotel, apart, hostel, guest house"
							/>
						</div>

						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_big_ben}
								cat_title="Tourist Attractions"
								cat_subtitle="Search for your favorite:"
								cat_text="restaurant, museum, hotel"
							/>
						</div>

						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_hamburger}
								cat_title="Accomodation"
								cat_subtitle="perfect solution"
								cat_text="hotel, apart, hostel, guest house"
							/>
						</div>

						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_museum}
								cat_title="Tourist Attractions"
								cat_subtitle="Search for your favorite:"
								cat_text="restaurant, museum, hotel"
							/>
						</div>
						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_ticket}
								cat_title="Accomodation"
								cat_subtitle="perfect solution"
								cat_text="hotel, apart, hostel, guest house"
							/>
						</div>

						<div className="col-lg-2 col-sm-6">
							<CategoryItem 
								imgUrl={img_coffee}
								cat_title="Tourist Attractions"
								cat_subtitle="Search for your favorite:"
								cat_text="restaurant, museum, hotel"
							/>
						</div>
					</div>
				</div>


				{/**  SLIDER_NEWS  */} 
				<div className="separator"></div>
				<div className="block text">
				<div className="text_small">Latest news from<span>London Blog</span></div>
				<div className="text_big">news</div>
				</div>
				<div className="separator"></div>
				<div className="container">
					<div className="row">	
						<div className="col-12">
								<SliderNews />
					    </div>
					</div>
				</div>
				<div className="separator"></div>
				<div className="btn-block">
				<a className="btn btn-primary btn-xl team-link" data-toggle="modal" href="#modalPhoneForm">MORE STORIES</a>
				</div>
			{/**  HISTORY  */}
			<div className="separator"></div>
			<div className="row">
			<div className="col col-sm col-md">
			<div className="h2">About London</div>
			<div className="col">
			<div className="text">
			<div className="p">
			London is the political, economic and cultural capital of Britain. 
			You can visit the Queen's official residence at Buckingham Palace and 
			tour the Houses of Parliament, historic home of the UK government.</div>
			<div className="p">
			London's world-class tourist attractions are renowned across the globe. 
			Many of the most famous attractions are free to visit, for example Tate Modern,
			 the National Gallery and the Victoria and Albert Museum.</div>
			</div>
			</div>			
			<div className="h2">HISTORY</div>
			<div className="col col-sm col-md">
			<div className="text">
			<div className="p">
			London's history stretches back over thousands of years, and the city boasts four 
			World Heritage Sites: the Palace of Westminster and Westminster Abbey, 
			the Tower of London, Maritime Greenwich and the Royal Botanic Gardens, Kew.</div>
			</div>
			</div>
			<div className="btn btn-block-2">
			<a className="btn btn-primary btn-xl team-link" data-toggle="modal" href="#modalPhoneForm">READ MORE</a>
			</div>
			</div>

			
			<div className="col col-sm">
			<div className="history-img"></div>
			</div>
			
			</div>

			{/**  SLIDER_TRIPS  */} 
			<div className="separator"></div>
				<div className="row">
				<div className="col-lg-12 col-sm-12">
				<div className="block2 text">
				<div className="text_small">Select your<span>favorite trip</span></div>
				<div className="text_big">select trip</div>
				
				</div>
				</div>
				</div>

				<div className="separator"></div>
				
					<div className="row">	
						<div className="col-12">
								<SliderTrips />
					    </div>
					</div>
		
	

			</main>
			);
	}
}
