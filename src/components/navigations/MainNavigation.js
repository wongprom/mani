import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import imgGlobe from '../../assets/icons/icon_global.png';
import imgLogo from '../../assets/images/img_logo_160.png';
import imgMenu from '../../assets/icons/icon_menu_64.png';
import imgClose from '../../assets/icons/icon_close_40.png';
import imgDown from '../../assets/icons/icon_arrow_down_white_24.png';
import { navLinks } from '../../assets/mockData/mockData';

const MainNavigation = () => {
  // const navLinks = [
  //   {
  //     text: 'LABEL',
  //     link: '/',
  //   },
  //   {
  //     text: 'PUBLISHING',
  //     link: '/publishing',
  //   },
  //   {
  //     text: 'STUDIO',
  //     link: '/studio',
  //   },
  //   {
  //     text: 'LIVE & CLOSEUP',
  //     link: '/liveAndCloseup',
  //   },
  //   {
  //     text: 'PODCAST',
  //     link: '/podcast',
  //   },
  //   {
  //     text: 'ABOUT',
  //     link: '/about',
  //   },
  // ];

  const [showNav, setShowNav] = useState(false);
  const history = useHistory();
  return (
    <div className="w-full bg-maniRed">
      <header className="flex justify-between bg-maniRed px-8 items-center py-4 max-w-mani mx-auto">
        <div className="w-40">
          <img
            className=""
            src={imgLogo}
            alt="Company logo"
            onClick={() => history.push('/')}
          />
        </div>

        <nav className="hidden ml-auto pr-10" id={showNav ? 'showSide' : ''}>
          <div>
            <img
              className="closeIcon"
              src={imgClose}
              alt="Close icon"
              onClick={() => setShowNav(false)}
            />
          </div>
          <div>
            <img
              className="arrowDownIcon"
              src={imgDown}
              alt="Arrow down icon"
            />
          </div>
          <ul className="flex space-x-4 text-maniWhite text-sm laptop-890:text-base">
            {navLinks.map(({ link, text }) => (
              <li>
                <Link onClick={() => setShowNav(false)} to={link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="globe h-10 w-10">
          <img src={imgGlobe} alt="Globe icon" />
        </div>

        <div className="menu h-10 w-10" onClick={() => setShowNav(!showNav)}>
          <img src={imgMenu} alt="Menu icon" />
        </div>
      </header>
    </div>
  );
};

export default MainNavigation;
