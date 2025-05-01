function Contact() {
  return (
    <section className="contact-item">
      <p>Feel free to reach out to me via email or LinkedIn.</p>
      <input id="name" type="text" placeholder="Name" required />
      <input id="email" type="email" placeholder="Email" required />
      <textarea id="message" placeholder="Message" required />
      <button type="submit" className="submit-btn">
        Send
      </button>
    </section>
  );
}

export default Contact;
