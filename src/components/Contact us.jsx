function ContactUs() {
  return (
    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
      Contact Us
    </button>
  );
}

export default ContactUs;