import React from 'react'
import HeroHistory from '../../src/images/hero-history.png'
import ImgThen from '../../src/images/then-img.png'
import ImgNow from '../../src/images/now-img.png'
import ImgWhatOne from '../../src/images/what-img-01.png'
import ImgWhatTwo from '../../src/images/what-img-02.png'
import ImgWhatThree from '../../src/images/what-img-03.png'


const History = () => {
  return (
    <>
    {/* hero section open */}
      <div className='hero-section'>
        <div className='hero-img-wrap'>
          <img src={ HeroHistory } />
        </div>
        <div className='hero-text'>
          <h3>History</h3>
        </div>
      </div>
      {/* hero section close */}

      {/* then now section open */}
      <div className='container'>
      <div className='row'>
          <div className='col-lg-12'>
            <div className='mock-what'>
              <h2>What is Moke?</h2>
              <p>
                A Moke is combination between a jeep wrangler and a golf cart, but a lot more adventurous!  This open concept electric vehicle seats 4 people, bluetooth radio, a backup camera and lights. Classified as a low-speed vehicle (LSV), it reaches a top speed of 25 mph, allowing for use on streets with a posted speed limit of 35 mph or less.
              </p>
              <ul className='what-listing'>
                <li>
                  <img src={ImgWhatOne} />
                </li>
                <li>
                  <img src={ImgWhatTwo} />
                </li>
                <li>
                  <img src={ImgWhatThree} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <ul className='then-now-listing'>
              <li>
                <div className='left-sec'>
                  <img src={ImgThen} />
                </div>
                <div className='right-sec'>
                  <h4>Then</h4>
                  <p>
                    Originally commissioned for the British military in the late 1950s, these doorless vehicles turned out to be less than suitable for warfare. Luckily, they caught on with the public, who fell in love with the “Mini Moke.” It helped that the Moke was created by Sir Alec Issigonis, the father of the original Austin Mini, who was an expert on marketing niche cars. It wasn’t too long before the Moke was embraced by celebrities like Brigitte Bardot, Jackie O and the Beach Boys. Even 007 got in on the action in four James Bond movies: Live and Let Die, You Only Live Twice, Moonraker and The Spy Who Loved Me. Surfers and tourists also enjoyed cruising around destinations like Hawaii, St. Barts, Macau, Mauritius and Barbados in the little Moke.
                  </p>
                </div>
              </li>
              <li>
                <div className='left-sec'>
                  <img src={ImgNow} />
                </div>
                <div className='right-sec'>
                  <h4>Now</h4>
                  <p>
                    Now, you can drive a piece of history by renting from our brand new fleet of street legal, electric, automatic beach cruisers. Each Moke weighs 2,300 pounds, has 14-inch tires and comes with seatbelts, Bluetooth radio, backup camera and lights. Classified as a low speed vehicle (LSV), it reaches a top speed of 25 mph, allowing for use on streets with a posted speed limit of 35 mph or less. With electric technology, the Moke experience is quiet, smooth and good for the planet. Click and cruise with keyless app-enabled entry.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* then now section close */}
    </>
  )
}

export default History