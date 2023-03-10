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
					grayscale:{
						'300': "#F3F3F3",
					},
					red:{
						'300': "#E63338"
					}
				},
				'book-red': '#e63338',
				'book-orange': '#ef7f16',
				'book-bright-orange': '#F4C233',
				'book-green': '#A2C516',
				'book-pale-green': '#33B3A0',
				'book-blue': '#00A1D7',
				'book-dark-blue': '#214d90',
				'book-purple': '#6B46A5',
				'book-pale-purple': '#896BB7',
				'book-gray': '#808080',
				'book-black': '#000',
				'red3': '#E63338',
				'neutrals-3': '#666666',
				gray: {
					'50': '#fbfbfb',
					'100': '#f3f3f3',
					'200': '#e0e0e0',
					'300': '#666666',
					'350': '#C4C2C4',
					'400': '#b7b7b7',
					'410': '#999999',
					'500': '#686867',
					'550': '#dddddd',
					'600': '#333333',
					'700': '#474747',
					'800': '#4a4a4a',
				},
				blue: {
					'100': '#e6f3f9',
					'200': '#cde9f4',
					'250': '#009fd7',
					'300': '#214D90',
					'350': '#00A1D7',
					'400': '#0472a0',
					'500': '#058fc8',
					'600': '#105b91',
					'700': '#035b80',
					'800': '#157ac2',
					'900': '#edf7fe',
					'950': '#0085c8',
					'970': '#d1ebfd',
					'980': '#0b3f65',
					'990': '#76c2f8',
				},
				green: {
					'50': '#61760d',
					'100': '#edf5ee',
					'200': '#dce8de',
					'250': '#00a890',
					'300': '#4ea057',
					'350': '#a2c516',
					'400': '#7ac943',
					'500': '#95c69a',
					'600': '#0c5c14',
					'800': '#f2f099',
				},
				red: {
					'50': '#ffedee',
					'100': '#fceaeb',
					'200': '#ffd2d4',
					'300': '#E63338',
					'400': '#e02020',
					'500': '#ff777d',
					'550': '#932124',
					'600': '#991016',
					'700': '#6b0000',
					'800': '#ffbad3',
					'900': '#ffa4a8',
				},
				purple: {
					'100': '#f2eef4',
					'200': '#cec9d1',
					'300': '#8d3e8b',
					'400': '#522a6f',
				},
				pink: {'100': '#ff7bac', '200': '#fff1f7'},
				orange: {
					'100': '#ff931e',
					'200': '#fdf5eb',
					'300': '#EF7F16',
					'400': '#f7b643',
					'500': '#ffbf80',
					'600': '#99520e'
				},
				yellow: {
					'100': '#fbfbe5',
					'200': '#ffc100'
				},
				teal: {
					'300': '#00A088',
					'500': '#00a088',
					'600': '#006051'
				},
			},
			borderColor: {
				'book-red': '#e63338',
				'book-orange': '#ef7f16',
				'book-bright-orange': '#F4C233',
				'book-green': '#A2C516',
				'book-pale-green': '#33B3A0',
				'book-blue': '#00A1D7',
				'book-dark-blue': '#214d90',
				'book-purple': '#6B46A5',
				'book-pale-purple': '#896BB7',
				'orange-light': '#FFC100',
				'gray-ccc': '#CCCCCC',
				'blue3': '#00A1D7',
				'black': '#000',
				'red3': '#E63338',
			}

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
			white: '#fff',
			whiteTransparent: '#fffffff2',
			black: {
				'300': '#000',
				'500': '#2a322a',
			},
			gray: {
				'100': '#f3f3f3',
				'200': '#e0e0e0',
				'300': '#666666',
				'400': '#b7b7b7',
				'500': '#686867',
				'550': '#dddddd',
				'600': '#333333',
				'700': '#474747',
				'800': '#4a4a4a',
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
			blue: {
				'100': '#e6f3f9',
				'200': '#cde9f4',
				'250': '#009fd7',
				'300': '#214D90',
				'350': '#00A1D7',
				'400': '#0472a0',
				'500': '#058fc8',
				'600': '#105b91',
				'700': '#035b80',
				'800': '#157ac2',
				'900': '#edf7fe',
				'950': '#0085c8',
				'970': '#d1ebfd',
				'980': '#0b3f65',
				'990': '#76c2f8',
			},
			green: {
				'50': '#61760d',
				'100': '#edf5ee',
				'200': '#dce8de',
				'250': '#00a890',
				'300': '#4ea057',
				'350': '#a2c516',
				'400': '#7ac943',
				'500': '#95c69a',
				'600': '#0c5c14',
				'800': '#f2f099',
			},
			red: {
				'50': '#ffedee',
				'100': '#fceaeb',
				'200': '#ffd2d4',
				'300': '#E63338',
				'400': '#e02020',
				'500': '#ff777d',
				'550': '#932124',
				'600': '#991016',
				'700': '#6b0000',
				'800': '#ffbad3',
				'900': '#ffa4a8',
			},
			purple: {
				'100': '#f2eef4',
				'200': '#cec9d1',
				'300': '#8d3e8b',
				'400': '#522a6f',
			},
			pink: {'100': '#ff7bac', '200': '#fff1f7'},
			orange: {
				'100': '#ff931e',
				'200': '#fdf5eb',
				'300': '#EF7F16',
				'400': '#f7b643',
				'500': '#ffbf80',
				'600': '#99520e'
			},
			yellow: {'100': '#fbfbe5'},
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
		borderColor: {
			grayscale:{
				'dark': '#666666',
				'light': '#EBEBEB',
			},
			'gray-dark': '#EBEBEB',
			'gray-light': '#666666',
			'red-light': '#E63338',
			'orange-light': '#FFC100',
			'red3': '#E63338',
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
