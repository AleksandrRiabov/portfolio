import React, { useRef, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = ({ status, setStatus }) => {
  const formRef = useRef();

  const [loading, setLaoding] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
    errorMessage: "",
  });
	

  const { user_name, user_email, subject, message, errorMessage } = formData;

  const isValidate = () => {
    if (user_name.replace(/\s/g, "") === "") {
      setFormData({ ...formData, errorMessage: "Please Add Your Name." });
      return false;
    }

    if (user_email.replace(/\s/g, "").length < 3) {
      setFormData({ ...formData, errorMessage: "Please Add Correct Email." });
      return false;
    }

    if (subject.replace(/\s/g, "").length < 1) {
      setFormData({ ...formData, errorMessage: "Please Add Subject." });
      return false;
    }

    if (message.replace(/\s/g, "").length < 9) {
      setFormData({ ...formData, errorMessage: "Please Add Message" });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidate()) {
      return;
    }
    setLaoding(true);
    sendEmail(e);
  };


  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_EMAIL_USER
      )
      .then(
        (result) => {
          setStatus({
            message:
              "Thank you for getting in touch. I endeavour to reply within 1 working day.",
            sent: true,
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactFormContainer">
      <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
        {errorMessage && <div className="validationError">{errorMessage}</div>}
        <label htmlFor="name">
          Name <span className="req">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="eg, Aleks Riabov"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email <span className="req">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="hello@gmail.com"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <label htmlFor="subject">
          Subject <span className="req">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="eg, Job Offer"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">
          General Message <span className="req">*</span>
        </label>
        <textarea
          rows="5"
          name="message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        {loading ? (
          <div className="formLoading">
            <LinearProgress />
          </div>
        ) : (
          <button className="contactFormBtn" type="submit">
            Send Now
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;