import React from 'react'
import { Button, Form } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactFormPage = () => (
  <Layout>
    <SEO title="Heavy Releases | Contact" />
    <h1>Contact</h1>

    <Form name="Contact Form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/thank-you">
      <input type="hidden" name="form-name" value="Contact Form" />
      <Form.Group controlId="contactForm.name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="contactForm.email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group controlId="contactForm.website">
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" name="website" placeholder="Enter your website URL" />
      </Form.Group>
      <Form.Group controlId="contactForm.message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" name="message" placeholder="Enter your message" />
      </Form.Group>
      <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
      <Button variant="primary" type="submit">Send Message</Button>
    </Form>
  </Layout>
)

export default ContactFormPage