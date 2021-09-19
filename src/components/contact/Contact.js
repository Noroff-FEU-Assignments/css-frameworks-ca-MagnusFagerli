import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Footer from '../footer/Footer'

function News() {
    return (  
          <div className="wrapper">

                  <div className="contactcontainer">
                    <div className="icons">
                      <i class="fas fa-envelope fa-3x some"></i>
                      <i class="fas fa-phone fa-3x some"></i>
                      <i class="fas fa-map-marker-alt fa-3x some"></i>
                    </div>

                    <div className="contact">
                        <p>hello@yay.com</p>
                        <p>123 456 789</p>
                        <p>123 Some Street Somewhere Some City 10000</p>
                      </div>
                    </div>
           <h1>Submit your details</h1>

            <Form className="contactform">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Website</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Message</Form.Label>

                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: '170px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
              </Form.Group>


              <Button variant="primary" size="lg" className="submitbtn">Submit</Button>

            </Form>

            <Footer />
          </div>
    )
}

export default News
