import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, TrendingUp, Wrench, ChevronDown, Globe, Book, Contact } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

  const linkClasses = ({ isActive }) =>
    `flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
      isActive
        ? "text-white bg-amber-600 bg-opacity-20 border-amber-600"
        : "text-white border-amber-600 hover:bg-amber-600 hover:bg-opacity-20"
    }`;

  // 👇 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-md  shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={linkClasses}>
                <Home size={18} />
                <span>Home</span>
              </NavLink>
              <NavLink to="/crypto" className={linkClasses}>
                <TrendingUp size={18} />
                <span>Crypto</span>
              </NavLink>
              <NavLink to="/courses" className={linkClasses}>
                <Book size={18} />
                <span>Courses</span>
              </NavLink>
              <NavLink to="/about" className={linkClasses}>
                <Wrench size={18} />
                <span>About</span>
              </NavLink>
              <NavLink to="/contact" className={linkClasses}>
                <Contact size={18} />
                <span>Contact</span>
                <span className="text-sm ml-1">↗</span>
              </NavLink>
            </div>
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden md:block relative">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-amber-600 px-4 py-2 rounded-full border border-amber-600 hover:bg-amber-600 hover:bg-opacity-20 transition-all duration-200"
            >
              <Globe size={18} />
              <span>EN</span>
              <ChevronDown size={16} />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-black bg-opacity-90 border border-amber-600 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-amber-600 hover:bg-amber-600 hover:bg-opacity-20 rounded-t-lg">EN</a>
                <a href="#" className="block px-4 py-2 text-amber-600 hover:bg-amber-600 hover:bg-opacity-20">ES</a>
                <a href="#" className="block px-4 py-2 text-amber-600 hover:bg-amber-600 hover:bg-opacity-20 rounded-b-lg">FR</a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-amber-600 hover:text-amber-400 transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-50 rounded-lg mt-2 border border-amber-600">
              <NavLink to="/" className={linkClasses}>
                <Home size={20} />
                <span>Home</span>
              </NavLink>
              <NavLink to="/crypto" className={linkClasses}>
                <TrendingUp size={20} />
                <span>Crypto</span>
              </NavLink>
              <NavLink to="/courses" className={linkClasses}>
                <Book size={20} />
                <span>Courses</span>
              </NavLink>
              <NavLink to="/about" className={linkClasses}>
                <Wrench size={20} />
                <span>About</span>
              </NavLink>
              <NavLink to="/contact" className={linkClasses}>
                <Contact size={20} />
                <span>Contact</span>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
