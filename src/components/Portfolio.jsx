function Portfolio() {
  return (
    <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
      Portfolio
    </button>
  );
}

export default Portfolio;