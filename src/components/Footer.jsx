import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import logo from '../assets/logo/logo1.png';

function Footer() {
  const lineRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is in viewport
    };
  
    const lineElement = lineRef.current; // Store the current element reference
    const elements = document.querySelectorAll('.animation-footer-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element is in viewport
          lineElement.classList.add('animated-line');
          elements.forEach(element => {
            element.classList.remove('opacity-0');
            element.classList.add('opacity-1');

          });

        } else {
          // Remove animation class when element is out of viewport
          lineElement.classList.remove('animated-line');
          elements.forEach(element => {
            element.classList.remove('opacity-1');
            element.classList.add('opacity-0');
          });
        }
      });
    }, options);
  
    // Start observing the line element
    observer.observe(lineElement);
  
    // Clean up observer when component unmounts
    return () => {
      // Check if the lineElement is still valid before unobserving
      if (lineElement) {
        observer.unobserve(lineElement);
      }
    };
  }, []);



  return (
    <footer className="relative w-full bg-black text-white py-20 shadow-2xl shadow-slate-50">
        <img src={logo} alt="Company Logo" className="absolute ms-20 me-auto mb-10 w-1/6" />
            <div className="w-full flex justify-center items-center z-20">
                <div className={`text-start w-1/2 mx-auto`}>
                    <p className={`text-2xl font-semibold uppercase mb-2`}>Careisgold SpA</p>
                    <p className={`text-lg`}>Via Monte Baldo 14/D, Villafranca di Verona</p>
                    <p className={`text-lg`}>C.F./P.Iva 04598560235 - REA VR-433912</p>
                    <p className={`text-lg`}>CAP. SOCIALE € 2.000.000,00 i.v.</p>
                    <p className={`text-lg`}>careisgoldspa@pec.careisgold.it</p>
                    <p className={`text-lg mb-10`}>Operatore Professionale Oro - Codice n° 5008578</p>

                    <hr ref={lineRef} className="border-b border-gray-300 my-4" />

                    <div className="flex justify-start space-x-8">
                        <Link to='/about' className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 0.5s ease-in"}}>About Us</Link>
                        <Link to='/contact' className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 1s ease-in"}}>Contact Us</Link>
                        <a href="link_to_facebook" className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 1.5s ease-in"}}><FaFacebook /></a>
                        <a href="link_to_instagram" className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 2s ease-in"}}><FaInstagram /></a>
                        <a href="link_to_linkedin" className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 2.5s ease-in"}}><FaFacebook /></a>
                        <Link to='/privacy-policy' className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 3s ease-in"}}>Privacy Policy</Link>
                        <Link to='/terms-of-service' className={`text-sm hover:text-gray-400 opacity-0 animation-footer-text`} style={{"transition":"opacity 3.5s ease-in"}}>Terms of Service</Link>
                    </div>                
                </div>
            </div>
    </footer>
  );
}

export default Footer;
