import './Contact.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shake from '../../assets/shake.svg'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fosk3ae',
        'template_jfq71nz',
        form.current,
        'kAlIkH1sedkgQJBkj'
      )
      .then(
        (result) => {
          toast.success(`🦄 Message sent successfully`, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          toast.error('Message not sent', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      );
    e.target.reset();
  };

  return (
    <article className='contact' id='contact'>
      <div className='left'>
        <img src={shake} alt='hand shake' />
      </div>
      <div className='right'>
        <h1>Contact</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='name'
            placeholder='Enter your name'
            name='from_name'
            required
          />
          <input
            type='email'
            placeholder='yourmail@domain.com'
            name='from_email'
            required
          />
          <textarea placeholder='Message' name='message' required />
          <button type='submit'>
            <span>SEND</span>
          </button>
        </form>
        <ToastContainer />
      </div>
    </article>
  );
}

export default Contact