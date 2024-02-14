import Container from 'react-bootstrap/Container';
import React from 'react';

function Footer(){
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Location</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009.3424482496764!2d-74.00565047080432!3d40.71071448510647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a246bcd7547%3A0x85e1d64abf113186!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645502849295!5m2!1sen!2sus" allowFullScreen title="Map"></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className='m-3'>Visit Us</h4>
            <address>
              123 Street Name, Bengalore<br />
              Bengalore, 560021<br />
              Tamil Nadu
            </address>
            <p>Contact: +1 234 567 890<br />
            Email: dalocal@yahoo.com</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
