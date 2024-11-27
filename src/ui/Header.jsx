import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';

function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3 uppercase sm:px-32">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src="../../media/logo/logo.svg"
            alt="Website logo link to home page"
            className="h-auto w-28 md:w-40"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="mr-10 flex items-center font-extralight sm:gap-8 md:text-lg">
        <LinkButton to="/projects">פרוייקטים</LinkButton>
        <LinkButton to="/about">אודות</LinkButton>
        <LinkButton to="/contact">צור-קשר</LinkButton>
        <button className="hidden sm:inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-stone-800 transition-transform duration-300 hover:scale-110 hover:fill-yellow-500"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
