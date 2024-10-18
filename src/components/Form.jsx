import "./FormStyle.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Extract form data using FormData
    const formData = new FormData(form.current);
  
    // Log form data to check if it's correct
    console.log('Form Data:', formData);
  
    // Explicitly set values for each template variable
    const emailParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };
  
    emailjs.send('service_zd4q0d8', 'template_zr7k9w9', emailParams, '7sC6gK-N_RuQJ8YC9')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea rows="6" name="message" placeholder="type your message here" />
        <input
        id="hello"
          type="submit"
          value="Send"
          style={{
            backgroundColor: 'burlywood',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          />
      </form>
    </div>
  );
};
 export default Form
