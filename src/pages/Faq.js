import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import HeroFaq from '../../src/images/hero-faq.png'
import IcPlay from '../../src/images/ic-play.svg'

const Faq = () => {
  return (
    <>
      <section className='faq-wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='hero-wrap'>
                <div className='d-flex flex-wrap align-items-center justify-content-between'>
                  <div className='banner-txt'>
                    <h2>Watch the video to get all the insights about what we are.</h2>
                    <p>
                      Still have questions? Check below all frequently asked questions.
                    </p>
                  </div>
                  <div className='banner-img'>
                    <img src={HeroFaq} />
                    <button className='playbtn'><img src={IcPlay} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='faq-card'>
                <h6>FAQs</h6>
                <h1>Frequently asked questions</h1>


                <div className='accordian-section'>

                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How old do I have to be to rent a Moke?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Where is WeMoke located?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I reserve a Moke?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Where is WeMoke located?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I start the Moke?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I drive the Moke on a highway?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How many people can ride in the Moke?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I keep the Moke longer than the original time I booked it for?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You must be 21 or older to rent with WeMoke. A valid driver’s license, car insurance and credit card are required.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>

                  
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq