import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PageContainer } from '../PageContainer';

export const Contact = ({ textEnter, textLeave }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const contactFormFields = [
    {
      name: 'Name',
      rows: 1
    },
    {
      name: 'Email',
      rows: 1
    },
    {
      name: 'Message',
      rows: 3
    }
  ];
  const contactFieldStyle =
    'border-b border-w6 dark:border-w1 placeholder-zinc-500 dark:placeholder-w1 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2';

  const validateForm = (name, email, message) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !(name === '' || email === '' || !emailRegex.test(email) || message === '');
  };
  const sendEmail = async (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    if (
      !validateForm(e.target.from_name.value, e.target.user_email.value, e.target.message.value)
    ) {
      setIsSubmitting(false);
      setStateMessage('Form not valid');
    } else {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setFormSubmitted(true);
            e.target.reset(); // Clears the form after sending the email
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
          }
        );
    }
    setTimeout(() => {
      setStateMessage(null);
    }, 5000); // hide message after 5 seconds
  };

  return (
    <PageContainer textEnter={textEnter} textLeave={textLeave} title="Contact Me" id="Contact">
      <div id="contact-section" className="mx-auto flex flex-col justify-center items-center">
        <form onSubmit={sendEmail} className="w-2/3 md:w-1/2 xl:w-1/3 space-y-8 flex flex-col">
          <div>
            <input
              type="text"
              name={'from_name'}
              className={contactFieldStyle}
              placeholder={'Name'}
            />
          </div>
          <div>
            <input
              type="email"
              name={'user_email'}
              className={contactFieldStyle}
              placeholder={'Email'}
            />
          </div>
          <div>
            <textarea
              name={'message'}
              className={contactFieldStyle}
              rows={4}
              placeholder={'Message'}
            />
          </div>
          <button
            type="submit"
            className={`bg-w4 dark:bg-w2 text-w1 mx-auto mt-4 p-2 w-full flex gap-2 items-center justify-center ${
              isSubmitting || formSubmitted ? 'cursor-not-allowed' : ''
            } ${formSubmitted ? 'opacity-60' : isSubmitting ? 'opacity-85 ' : ''}`}
            disabled={isSubmitting || formSubmitted}>
            {formSubmitted ? (
              'Sent!'
            ) : isSubmitting ? (
              <>
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-4 border-w1 border-t-transparent border-solid rounded-full animate-spin" />
                </div>
                <div>Sending</div>
              </>
            ) : (
              'Send'
            )}
          </button>
          {stateMessage && <p className="text-red-300">{stateMessage}</p>}
        </form>
      </div>
    </PageContainer>
  );
};