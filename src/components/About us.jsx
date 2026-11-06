function AboutUs() {
  return (
    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
      About Us
    </button>
  );
}

export default AboutUs;