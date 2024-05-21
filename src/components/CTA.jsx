import React, { useState } from 'react';
import styles from '../style';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const webhookUrl = 'https://discord.com/api/webhooks/1242535850261352488/Oa0Wmnaj7N7ff4P7905elpAz2NzDS_Wn_IgSg9poy0zpxR3qTgpom-BJhwiUgo2u7Ft4';

    const payload = {
      content: `New contact form submission:\n\n**Name**: ${formData.name}\n**Email**: ${formData.email}\n**Message**: ${formData.message}`,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <form
      className={`${styles.flexCenter} flex-col w-full sm:w-[400px] p-6 custom-bg rounded-lg box-shadow`}
      onSubmit={handleSubmit}
    >
      <div className='mb-4 w-full'>
        <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-1'>
          Name
        </label>
        <input
          type='text'
          id='name'
          className='mt-1 p-3 w-full border rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4 w-full'>
        <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-1'>
          Email
        </label>
        <input
          type='email'
          id='email'
          className='mt-1 p-3 w-full border rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='you@example.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-4 w-full'>
        <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-1'>
          Describe your problem
        </label>
        <textarea
          id='message'
          className='mt-1 p-3 w-full border rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Your message...'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit' className='w-full p-3 bg-blue-gradient text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>
        Submit
      </button>
    </form>
  );
};


const CTA = () => {
  return (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col items-start'>
        <h2 className={styles.heading2}>Let's try our service, contact us!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        whatsapp: +48 733602243
        </p>
        
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 w-full sm:w-auto mt-10 sm:mt-0`}>
        <ContactForm />
      </div>
    </section>
  );
};

export default CTA;
