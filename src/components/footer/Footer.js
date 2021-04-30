import { browse, about, resources } from '../../assets/mockData/mockData';

import imgLogoColor from '../../assets/images/img_logo_color_164.png';
import iconFacebook from '../../assets/icons/icon_facebook_normal_white_40.png';
import iconInstagram from '../../assets/icons/icon_insta_normal_white_40.png';
import iconYoutube from '../../assets/icons/icon_youtube_normal_white_40.png';

const Footer = () => {
  return (
    <footer className="bg-maniBlack text-maniWhite ">
      <div className="MAIN-WRAPPER mx-4 max-w-mani lg:flex lg:flex-row-reverse lg:mx-auto lg:relative">
        <div className="LINKS_AND_FORM_WRAPPER lg:flex lg:w-2/3 ">
          <div className="LINK_WRAPPER flex flex-wrap lg:w-1/2 ">
            <div className="w-6/12 mt-8 md:w-4/12">
              <h3 className="text-xl font-bold">Browser</h3>
              <ul className="mt-4">
                <li className="flex flex-col font-light text-lg">
                  {browse.map(({ link, url }) => (
                    <a key={link} href={url}>
                      {link}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <div className="w-6/12 mt-8 md:w-4/12 ">
              <h3 className="text-xl font-bold">About</h3>
              <ul className="mt-4">
                <li className="flex flex-col font-light text-lg">
                  {about.map(({ link, url }) => (
                    <a key={link} href={url}>
                      {link}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
            <div className="mt-8 md:w-4/12">
              <h3 className="text-xl font-bold">Resources</h3>
              <ul className="mt-4">
                <li className="flex flex-col font-light text-lg">
                  {resources.map(({ link, url }) => (
                    <a key={link} href={url}>
                      {link}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="FORM_WRAPPER mt-12 flex justify-center lg:w-1/2 lg:mb-16 ">
            <form className="p-6 bg-maniGraydarker max-w-3xl lg:max-w-sm">
              <div>
                <h3 className="text-xl font-bold ">Contact us</h3>
                <div className="">
                  <input
                    className="border-b-2 border-fuchsia-600 w-full leading-9 mt-6 bg-maniGraydarker"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="border-b-2 border-fuchsia-600 w-full leading-9 mt-6 bg-maniGraydarker"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="border-b-2 border-fuchsia-600 w-full leading-9 mt-6 bg-maniGraydarker"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button className="py-2 px-8 bg-maniRed">Send message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12  lg:w-1/3 lg:flex lg:justify-center ">
          <div className="">
            <div>
              <img src={imgLogoColor} alt="Muziwi logo" />
            </div>
            <div className="lg:mt-16">
              <p className="text-lg font-light">Follow us on our platforms</p>
              <div className="flex">
                <div>
                  <img src={iconFacebook} alt="Facebook icon" />
                </div>
                <div className="mx-2">
                  <img src={iconInstagram} alt="Instagram icon" />
                </div>
                <div>
                  <img src={iconYoutube} alt="Youtube icon" />
                </div>
              </div>
            </div>
            <div className="mt-8 pb-12 lg:absolute lg:bottom-4 lg:left-1/3">
              <p className="text-sm font-light">
                Copyright 2020. All Rights Reserved. Muzikawi
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
