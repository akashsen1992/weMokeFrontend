import React from 'react'
import IcDriving from '../../src/images/ic-driving-license.svg'
import IcSpeedometer from '../../src/images/ic-speedometer.svg'
import IcCalendar from '../../src/images/ic-calendar.svg'
import CitiesOne from '../../src/images/cities-01.png'
import CitiesTwo from '../../src/images/cities-02.png'
import CitiesThree from '../../src/images/cities-03.png'
import CitiesFour from '../../src/images/cities-04.png'
import CitiesFive from '../../src/images/cities-05.png'
import CitiesSix from '../../src/images/cities-06.png'
import ImgYoga from '../../src/images/yoga-img-01.png'
import IcDelivery from '../../src/images/ic-delivery.svg'
import IcElectric from '../../src/images/ic-electric.svg'
import IcVehicle from '../../src/images/ic-vehicle.svg'
import IcCamera from '../../src/images/ic-camera.svg'
import IcCruising from '../../src/images/ic-cruising.svg'
import IcBluetooth from '../../src/images/ic-bluetooth.svg'


const Home = () => {
  return (
    <div>
{/* banner section open */}
<section className="service-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <ul className="service-listing">
          <li>
            <img src={ IcDriving } />
            <p>
              Must be 21 years old to drive with a valid U.S. drivers license.
            </p>
          </li>
          <li>
            <img src={ IcSpeedometer } />
            <p>
              The Moke can only go 25 mph and can only be driven on roads 35 mph or less. The Moke is street legal.
            </p>
          </li>
          <li>
            <img src={ IcCalendar } />
            <p>
              You can rent a Moke by the hour, day, week or month.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Chat with us to explore booking options and partnerships!</h1>
        <a href="" className="btn-bordered">Partner with us</a>
        <a href="" className="btn-filled">Book for private events</a>
      </div>
    </div>
  </div>
</section>
{/* banner section close */}

{/* cities section open */}
    <section className="cities-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>WeMoke Cities</h4>
            <ul className="cities-listing">
              <li>
                <div className="img-box">
                  <img src={ CitiesOne } />
                </div>
                <h4>Palm Springs</h4>
              </li>
              <li>
                <div className="img-box">
                  <img src={ CitiesTwo } />
                </div>
                <h4>Palm Springs</h4>
              </li>
              <li>
                <div className="img-box">
                  <img src={ CitiesThree } />
                </div>
                <h4>Palm Springs</h4>
              </li>
              <li>
                <div className="img-box">
                  <img src={ CitiesFour } />
                </div>
                <h4>Palm Springs</h4>
              </li>
              <li>
                <div className="img-box">
                  <img src={ CitiesFive } />
                </div>
                <h4>Palm Springs</h4>
              </li>
              <li>
                <div className="img-box">
                  <img src={ CitiesSix } />
                </div>
                <h4>Palm Springs</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
{/* cities section close */}


{/* moke section open */}
<section className="moke-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="moke-bg">
          <div className="make-flex">
            <div className="img-box">
              <img src={ ImgYoga } />
            </div>
            <div className="img-txt">
              <h1>What is a Moke?</h1>
              <p className="mb-4 pb-4">
                A Moke is combination between a jeep wrangler and a golf cart, but a lot more adventurous! This open concept electric vehicle seats 4 people, bluetooth radio, a backup camera and lights. classNameified as a low-speed vehicle (LSV), it reaches a top speed of 25 mph, allowing for use on streets with a posted speed limit of 35 mph or less.
              </p>
              <h1>How To Moke</h1>
              <p>
                The Moke rolls slow and low with a max speed of 25 mph, perfect for local excursions in sunny beach towns and resort
                areas. You'll stay on roads 35 mph or less and can rent by the hour, day, week or month. Charging the vehicle is
                encouraged, and access to the key is granted by a lock box code sent via SMS to the driver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* moke section close */}


{/* features section open */}
<section className="features-section">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Key Features</h1>
        <p>We prioritize our clients comfort and safety. That’s why we provide the best services you can imagine.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <ul className="features-listing">
          <li>
            <img src={ IcDelivery } />
            <h4>Optional delivery</h4>
          </li>
          <li>
            <img src={ IcElectric } />
            <h4>Fully electric</h4>
          </li>
          <li>
            <img src={ IcVehicle } />
            <h4>Custom wrapped vehicle</h4>
          </li>
          <li>
            <img src={ IcCamera } />
            <h4>Backup Camera</h4>
          </li>
          <li>
            <img src={ IcCruising } />
            <h4>Headlights for night cruising</h4>
          </li>
          <li>
            <img src={ IcBluetooth } />
            <h4>Bluetooth radio</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* features section close */}
    </div>
  )
}

export default Home