module.exports = {
  important: true,
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile-375': '375px',
        'mobile-425': '425px',
        'laptop-890': '890px',
      },
      maxWidth: {
        375: '375px',
        425: '425px',
        mani: '1366px',
        '1/2': '45%',
      },
      colors: {
        maniRed: '#EE2624',
        maniBlack: '#1A1A1A',
        maniWhite: '#FFFFFF',
        maniGraydark: '#8C8C8C',
        maniGraydarker: '#262626',
        maniGraylight: '#E5E5E5',
      },
      lineHeight: {
        zero: '0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
