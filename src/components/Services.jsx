function Services() {
  return (
    <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
      Services
    </button>
  );
}

export default Services;