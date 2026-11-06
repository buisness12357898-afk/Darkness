import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';

function Navbar() {
  return (
    <nav>
      <Home />
      <Services />
      <AboutUs />
      <Portfolio />
      <ContactUs />
    </nav>
  );
}

export default Navbar;