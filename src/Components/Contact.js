import React from 'react'

function Contact() {
  return (
    <>
      <h2 className='text-secondary text-center mt-5 mb-3'>Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9203891399357!2d85.35806101453797!3d27.688855332912357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a23ff53c6c1%3A0xbf154d5bf0abe0ba!2sPepsicola!5e0!3m2!1sen!2snp!4v1668761302938!5m2!1sen!2snp" height="400" width='100%' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>

      <div className="container mt-4">
        <form className='w-50 mx-auto' action="https://formspree.io/f/mvoylewa"
         method="POST">

          {/* username */}
          <div className="mb-3">
            <label for="" className="form-label">Username</label>
            <input type="username" name='username' className="form-control" id="" aria-describedby=""  autoComplete='off'/>

          </div>

          {/* email */}
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off'/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          {/* message */}
          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='message' autoComplete='off'></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>

          {/* submit */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
}

export default Contact