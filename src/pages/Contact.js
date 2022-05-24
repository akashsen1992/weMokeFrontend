import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='contact-wrap'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>Contact Us</h2>
            <p>
              Do you have any questions, suggestions or feedback? we love to hear from you!
            </p>
          </div>

          <div className='col-lg-12'>
            <div className='contact-form'>
              <ul className='form-listing'>
                <li>
                  <input type="text" placeholder='Name*' className='inp-style' />
                </li>
                <li>
                  <input type="email" placeholder='Email*' className='inp-style' />
                </li>
                <li className='flex-inp'>
                  <span className='country-code'>+91</span> |
                  <input type="number" placeholder='Phone number*' className='inp-style' />
                </li>
                <li>
                  <textarea placeholder='Message' className='textarea-style'></textarea>
                </li>
                <li>
                  <button className='btn-filled'>SUBMIT</button>
                </li>
              </ul>
            </div>
          </div>


          <div className='col-lg-12'>
            <div className="map-wrap">
              <div className="map-sec">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14724.205058627349!2d75.8650035!3d22.68913545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1653380724869!5m2!1sen!2sin"></iframe>
              </div>
              <div className="map-txt">
                <h4><span>Phone:</span>[888] 985 3027</h4>
                <h4><span>Email:</span>info@wemoke.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact