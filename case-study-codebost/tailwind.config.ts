import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {

        backgroundImage : {
          'img_bg_hero' : "url('../assets/img_bg_hero')"
        }

      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'max': '1160px'},
        'lg': {'max': '1023px'},
        'md': {'max': '800px'},
        'mdMin': { 'min': '800px' },
        'sm': {'max': '639px'},
        'mm': {'max' : '400px'},
      },
      colors:{
        'primary-blue' : '#106EB0',
        'primary-orange' : '#EC7000',
        'primary-gray' : '#33303E',
        'second-gray' : '#4E5B59',
        'gray-phone' : '#F4F4F4',
        'txt-gray' : '#7A7786',
        'opacity-gray' : ' rgba(100, 80, 57, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
