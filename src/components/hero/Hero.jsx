import React from 'react'
import "./Hero.scss"
import { FaBox } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className='main_part'>
        <section className='info'>
          <div className="container_2">
            <div className="info__box">
              <div className="box__left">
                <p><span style={{color: "gold"}}>01</span> Best Coffee Flavour</p>
                <div className="leftbox__img"></div>
              </div>
              <div className="box__left">
                <p><span style={{color: "gold"}}>01</span> Best Coffee Flavour</p>
                <div className="leftbox__img2"></div>
              </div>
              <div className="box__left">
                <p><span style={{color: "gold"}}>01</span> Best Coffee Flavour</p>
                <div className="leftbox__img3"></div>
              </div>
            </div>
          </div>
        </section>
        <section className='desciption'>
          <div className="container_2">
            <div className="description__boxes">
              <div className="images">
                  <div className="box__image1"></div>
                  <div className="box__image2"></div>
                  <div className="box__image3"></div>
              </div>
              <div class="text">
                  <h4>Our history</h4>
                  <h2>Create a new story with us</h2>
                  <p>
                    Mauris Rhoncus In Imperdiet Placerat. Vestibulum Erat Sed Nisi Suscipit Ligula Vulputate. 
                    A Fringilla Urna Maximus. Donec Et Nibh Maximus, Est Eu. Mattis Nunc Present Quam Quis 
                    Quam Venenatis Fringilla. Morbi Vestibulum Id Tells Ametdo Mathis Aliquam Erat Volutpat.
                  </p>
              </div>
            </div>
          </div>
        </section>
        <section className='product'> 
          <div className="container_2">
            <div className="product__basket">
              <div className="bascetbox__title">
                <p style={{color: "#A7845F"}}>Popular Product</p>
                <h2>Coffee popular Product</h2>
              </div>
              <div className="bascet__boxes">
                  <div className="bascet__category">
                    <div className="category__first">
                      <div className="photo"></div>
                      <h3>BRAZEL COFFEE GRED</h3>
                      <button><FaBox/> Add to card</button>
                    </div>
                  </div>

                  <div className="bascet__category">
                    <div className="category__first">
                      <div className="photo"></div>
                      <div className="star"></div>
                      <h3>BRAZEL COFFEE GRED</h3>
                      <p>PRICE - <span style={{color: "#62503D"}}>$320.00/</span>$358</p>
                    </div>
                  </div>

                  <div className="bascet__category">
                    <div className="category__first">
                      <div className="photo"></div>
                      <div className="star"></div>
                      <h3>BRAZEL COFFEE GRED</h3>
                      <p>PRICE - <span style={{color: "#62503D"}}>$320.00/</span>$358</p>
                    </div>
                  </div>
              </div>
              <div className="box__btn">
                  <button className='bascet__btn'>VIEW ALL PRODUCT</button>
              </div>
            </div>
          </div>
        </section>
        <section className='home'>
          <div className="container_2">
            <div className="home__box">
              <div className="home__img">
                  <div className="img__coffee"></div>
              </div>
              <div className="home__title">
                <h2>Coffee machine, buy for home</h2>
                <p>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula
                  volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nib
                   maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fri
                  ngilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</p>
                <button className='home__btn'>DISCOVER NOW</button>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Hero