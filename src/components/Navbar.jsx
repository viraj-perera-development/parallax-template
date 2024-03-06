import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import caveaux from '../assets/minimalSection/cassaforte.jpg'

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuTransition, setMenuTransition] = useState(false);
    const [hideLink, setHideLink] = useState(false);
    const [negativeClass, setNegativeClass] = useState('text-negative-remove')

    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (!isMenuOpen) {
                setIsVisible(window.scrollY < lastScrollY);
                lastScrollY = window.scrollY;
                document.body.style.overflow = 'auto';
            } else if (isMenuOpen){
                document.body.style.overflow = 'hidden';
            }
            if (window.scrollY > 850) {
                setNegativeClass('text-negative');
            }else{
                setNegativeClass('text-negative-remove');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]); // Include isMenuOpen in the dependency array


    const handleMenuOpen = () => {
        setNegativeClass('text-negative-remove');
        setIsMenuOpen(true);
        setHideLink(false);
        setTimeout(() => {
            setMenuTransition(true);
        }, 1000);
    };

    const handleMenuClose = () => {
        setHideLink(true);
        setTimeout(() => {
            setMenuTransition(false);
            setIsMenuOpen(false);
        }, 900);
        setTimeout(() => {
            setNegativeClass('text-negative');
        }, 2000);
    };

    return (
    <>
        <div className={`${negativeClass} fixed z-30 top-0 left-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`flex justify-between items-center ${negativeClass === 'text-negative-remove' ? 'text-slate-50':''} p-10`}>
                <h2 className="uppercase font-medium text-xl">Logo</h2>
                <div className="hidden lg:block">
                    <nav className="flex justify-end items-center">
                        <Link to="/" className="uppercase font-medium mx-6">Home</Link>
                        <Link to="/azienda" className="uppercase font-medium mx-6">Azienda</Link>
                        <Link to="/notizie" className="uppercase font-medium mx-6">Notizie</Link>
                        <Link to="/prodotti" className="uppercase font-medium mx-6">Prodotti</Link>
                        <Link to="/collabora-con-noi" className="uppercase font-medium mx-6">Collabora con noi</Link>
                        <Link to="/faq" className="uppercase font-medium mx-6">FAQ</Link>
                        <Link to="/contatti" className="uppercase font-medium mx-6">Contatti</Link>
                    </nav>
                </div>
                <div className="lg:hidden">
                    <button className="w-6 h-6" onClick={handleMenuOpen}>
                       <div className=''><RxHamburgerMenu className='text-3xl' /></div>
                    </button>
                    <nav className={`flex flex-col justify-center items-center absolute top-0 right-0 w-full h-full bg-black transition-all duration-[1000ms] ease-in ${isMenuOpen ? 'opacity-100' : 'opacity-0'} ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ${isMenuOpen && 'h-screen'}`}>
                        {menuTransition && (
                            <>
                                <Link to="/" data-aos="fade-right" data-aos-duration="250" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Home</Link>
                                <Link to="/azienda" data-aos="fade-right" data-aos-duration="500" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Azienda</Link>
                                <Link to="/notizie" data-aos="fade-right" data-aos-duration="750" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Notizie</Link>
                                <Link to="/prodotti" data-aos="fade-right" data-aos-duration="1000" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Prodotti</Link>
                                <Link to="/collabora-con-noi" data-aos="fade-right" data-aos-duration="1250" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Collabora con noi</Link>
                                <Link to="/faq" data-aos="fade-right" data-aos-duration="1500" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>FAQ</Link>
                                <Link to="/contatti" data-aos="fade-right" data-aos-duration="1750" className={`${hideLink ? 'link-hidden' : ''} text-slate-50 uppercase mx-6 my-2`}>Contatti</Link>
                                <button className="absolute top-0 right-0 w-6 h-6 text-white m-10" onClick={handleMenuClose}>
                                    <IoClose className='text-3xl'/>
                                </button>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    </>
    );
}

export default Navbar;
