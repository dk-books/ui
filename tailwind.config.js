/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx,png}"
	],
	theme: {
		extend: {
			backgroundImage: {
				'triangle': "url('/images/triangle.png')",
			},
			fontFamily: {
				sans: ["Montserrat", "ui-sans-serif", "sans-serif"],
				heading: ["HelveticaNeue", "ui-serif", "Georgia"],
			},
			padding: {
				'1/3': '33.33333%',
				'2/3': '66.66667%'
			},
			margin: {
				'1/3': '33.33333%',
				'2/3': '66.66667%'
			},
			spacing: {
				'2': '0.5rem', //8px
				'4': '1rem', //16px
				'4.5': '1.125rem', //18px
				'6': '1.5rem', //24px
				'8': '2rem', //32px
				'10.5': '2.625rem', //42px
				'12': '3rem', //48px
				'13': '3.25rem', //52px
				'14': '3.5rem', // 56px
				'15': '3.75rem', //60px
				'19': '4.75rem', //76px
				'25': '6.25rem', //100px
				'30': '7.5rem', //120px
				'37.5': '9.375rem', //150px
				'42': '10.5rem', //168px
				'72.75': '18.75rem',//300px
				'81': '22rem', //352px
				'82': '23rem',
				'96.5': '24.125rem', //386px
			},
			width: {
				mobile: 'calc(100% - 2.5rem)',
				'mobile-extra': 'calc(100% + 2.5rem)',
				'tablet-portrait': 'calc(100% - 2.875rem)',
				'tablet-landscape': '60rem', //960px
				'desktop-page': '74.375rem', //1190
				'narrow-tablet-p': '37.25rem', //596px
				'narrow-tablet-l': '39.5rem', //632px
				'narrow-desktop': '49rem', //784px
				'form-page-tablet': '29.375rem', //470px
				'search-box': '50rem', //800
				'book-button': '49% !important', //45%
				'275': '275px',
				'283': '283px',
				'238': '238px',
				'341': '341px',
				'128': '128px',
				'42': '42px',
				'40': '40px',
			},
			height: {
				'17.75': '4.4375rem', // 71px
				'36': '36px',
				'42': '42px',
				'44': '44px',
				'49': '49px'
			},
			padding: {
				'17.75': '4.4375rem', // 71px
			},
			inset: {
				'6.25': '1.563rem', //25px
				'3.3': '3.313rem', //63px
				'3.5': '3.438rem', //55px
				'6': '6.188rem', //99px
				'150': '9.375rem', //150px
			},
			top: {
				'top-header': '4.4375rem',
			},
			gridTemplateColumns: {
				'max-1fr': 'max-content 1fr',
			},
			transitionProperty: {
				menu: 'width, inset',
			},
			colors: {
				efe:{
					gray: '#2a322a',
				},
				dkl:{
					blue: '#0085c8'
				},
			},
		},
		fontFamily: {
			title: ['Avenir Next'],
		},
		boxShadow: {
			xs: '0px 3px 8px rgba(0, 0, 0, 0.12)',
			sm:
				'0 1px 1px hsl(0deg 0% 0% / 0.025),0 2px 2px hsl(0deg 0% 0% / 0.025),0 4px 4px hsl(0deg 0% 0% / 0.025),0 8px 8px hsl(0deg 0% 0% / 0.025),0 16px 16px hsl(0deg 0% 0% / 0.025)',
			// md: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
			md:
				'0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)',
			// lg: ' 0 8px 16px 0 rgba(0, 0, 0, 0.2)',
			lg:
				'0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075),0 32px 32px hsl(0deg 0% 0% / 0.075)',
			xl:
				'0 6px 10px 0 rgb(0 0 0 / 20%)',
			light:
				'0 2px 4px 0 rgb(0 0 0 / 10%)',
			error:
				'0 2px 6px 0 rgb(0 0 0 / 20%)',
			arrow:
				'-4px -5px 6px 0 rgb(0 0 0 / 10%)'
		},
		colors: {
			// default color palettes
			red:{
				'900': '#932124',
				'800': '#B8292D',
				'700': '#E63338',
				'600': '#EB5C60',
				'500': '#F08588',
				'400': '#F5ADAF',
				'300': '#FAD6D7',
				'200': '#F9E7E8',
				'100': '#FAF1F1',
			},
			grayscale:{
				'900': '#000000',
				'800': '#333333',
				'700': '#666666',
				'600': '#999999',
				'500': '#CCCCCC',
				'400': '#EBEBEB',
				'300': '#F5F5F5',
				'200': '#FBFBFB',
				'100': '#FFFFFF',
			},
			purple: {
				'900': '#2C1D44',
				'800': '#563884',
				'700': '#6B46A5',
				'600': '#896BB7',
				'500': '#A690C9',
				'400': '#C4B5DB',
				'300': '#E1DAED',
				'200': '#F0EDF6',
				'100': '#F8F6FB',
			},
			blue: {
				'900': '#00678A',
				'800': '#0081AC',
				'700': '#00A1D7',
				'600': '#33B4DF',
				'500': '#66C7E7',
				'400': '#99D9EF',
				'300': '#CCECF7',
				'200': '#E6F6FB',
				'100': '#F2FAFD',
			},
			'dark-blue': {
				'900': '#0E203B',
				'800': '#15325C',
				'700': '#214D90',
				'600': '#4D70A5',
				'500': '#7893BB',
				'400': '#A4B5D0',
				'300': '#CFD8E6',
				'200': '#E5EAF0',
				'100': '#F0F2F6',
			},
			turquoise: {
				'900': '#006051',
				'800': '#00806C',
				'700': '#00A088',
				'600': '#33B3A0',
				'500': '#66C6B8',
				'400': '#99D9CF',
				'300': '#CCECE7',
				'200': '#DEF3F0',
				'100': '#F2FAF9',
			},
			green: {
				'900': '#61760D',
				'800': '#819F11',
				'700': '#A2C516',
				'600': '#B4D044',
				'500': '#C6DB72',
				'400': '#DAE8A2',
				'300': '#E9F0CD',
				'200': '#F2F6E4',
				'100': '#F7F8F0',
			},
			yellow: {
				'900': '#C2A801',
				'800': '#E8CA10',
				'700': '#F7D70E',
				'600': '#F9DF3E',
				'500': '#FAE76E',
				'400': '#FCEF9F',
				'300': '#FDF7CF',
				'200': '#FEFBE7',
				'100': '#FFFDF3',
			},
			'dark-yellow': {
				'900': '#785900',
				'800': '#C08F00',
				'700': '#F1B300',
				'600': '#F4C233',
				'500': '#F7D166',
				'400': '#F9E199',
				'300': '#FCF0CC',
				'200': '#FEF7E6',
				'100': '#FEFBF2',
			},
			orange: {
				'900': '#99520E',
				'800': '#BF6612',
				'700': '#EF7F16',
				'600': '#F29945',
				'500': '#F5B273',
				'400': '#F9CCA2',
				'300': '#FCE5D0',
				'200': '#FDEEE1',
				'100': '#FDF4EC',
			},
			pink: {
				'900': '#993157',
				'800': '#CC4174',
				'700': '#FF5291',
				'600': '#FF75A7',
				'500': '#FF97BD',
				'400': '#FFBAD3',
				'300': '#FFDCE9',
				'200': '#FFEEF4',
				'100': '#FFF6FA',
			},
			// specific components
			alert:{
				success: {
					bg: '#edf5ee',
					text: '#0c5c14'
				},
				error: {
					bg: '#ffedee',
					text: '#F5ADAF'
				},
			}
		},
		fontSize: {
			'12': '0.75rem', //12px
			'14': '0.875rem', //14px
			'16': '1rem', //16px
			'18': '1.125rem', //18px
			'20': '1.25rem', //20px
			'24': '1.5rem', //24px
			'26': '1.625rem', //26px
			'30': '1.875rem', //30px
			'32': '2rem', //32px
			'34': '2.125rem', //34px
			'36': '2.25rem', //36px
			'38': '2.375rem', //38px
			'44': '2.75rem', //44px
			'46': '2.875rem', //46px
			'52': '3.25rem', //52px
			'64': '4rem', //64px
		},
		screens: {
			sm: {max: '767px'}, // mobile
			md: '768px', // tablet portrait
			lg: '1024px', // tablet landscape & desktop
			xl: '1280px', //desktop
			'any-hover': {raw: '(hover: hover)'},
		},
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'10': '10px',
			'20': '20px',
			'30': '30px',
			'40': '40px',
			'50': '50px',
			'60': '60px',
			'70': '70px',
		},
		backgroundSize: {
			'30': '1.275rem'
		},
		backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '10%': '10%',
    },
  },
  variants: {
    extend: {
      textDecoration: ['group-hover', 'hover', 'active', 'focus-within'],
      boxShadow: ['group-hover', 'hover', 'active', 'focus-visible'],
      backgroundColor: ['hover', 'active', 'focus-within'],
      backgroundOpacity: ['hover'],
      borderColor: ['hover'],
      opacity: ['hover', 'group-hover', 'active'],
      scale: ['hover', 'group-hover'],
      visibility: ['group-hover'],
      rotate: ['hover', 'group-hover'],
      outline: ['focus'],
      maxWidth: ['hover', 'group-hover'],
      margin: ['first'],
      padding: ['first'],
      borderWidth: ['first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
