import { useEffect, useState } from 'react';
import './Contacts.css';
import Title from '../../components/Title/Title';
import ContactOptions from './ContactOptions/ContactOptions';
import ContactForm from './ContactForm/ContactForm';
import ThankYou from './ThankYou/ThankYou';

const Contacts = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [status, setStatus] = useState({ message: '', sent: false });

  return (
    <section className='page relative'>
      {status.sent ? (
        <ThankYou message={status.message} />
      ) : (
        <div>
          <Title
            title='Contact Aleksandr Riabov'
            subtitle='Contact me on one of the options listed below or send a general message using the form.'
          />
          <div className='contactPageContent'>
            <ContactForm status={status} setStatus={setStatus} />
            <ContactOptions />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;

