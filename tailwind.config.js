/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	screens: {
		sm: '648px',
		md: '768px',
		lg: '968px',
		xl: '1200px',
	},
	fontFamily: {
		primary: ['var(--font-dmSans)' ],
		secondary: ['var(--font-barlow)'],
	},
	container: {
		center: true,
		padding: '15px',
	},
  	extend: {
  		
		  
	  colors: {
		primary: '#121315',
		secondary: '#666666',
		accent: '#FFCA3B',
		gold:"#E1A520",
		border: '#F9FAFB',
		info: '#d7d7d7',
	  },
	  boxShadow: {
		custom: '0px 4px 54px 10px rgba(18, 19, 21, 0.06)'
	},
	  backgroundImage:{
		hero: "url('/assets/img/hero/bg4.png')",
		carousel:"url('/assets/accueil/sortie/bg1.png')"
	  }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
