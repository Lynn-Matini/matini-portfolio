import { useState } from 'preact/hooks';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    toast.success('Thanks for reaching out to Matini!', {
      style: {
        border: '2px solid #5458ff',
        padding: '16px',
        color: '#5458ff',
      },
      duration: 5000,
      iconTheme: {
        primary: '#5458ff',
        secondary: '#f3e2f3',
      },
    });
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <>
      <form className="contact-item" onSubmit={handleSubmit}>
        <p>Feel free to reach out to me via email or LinkedIn.</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit" className="submit-btn">
          Send to Matini
        </button>
      </form>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        containerStyle={{
          bottom: 0,
        }}
      />
    </>
  );
}

export default Contact;
