import { extendTheme } from '@mui/joy';
import { Inter, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin-ext'],
})

const inter = Inter({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin-ext'],
})

const theme = extendTheme({
   colorSchemes: {
      light: {
         palette: {
            background: {
               body: '#F4F4F5',
               level1: '#fff',
               level2: '#d9d9d9',
               level3: '#F4F4F5'
            },
            primary: {
               '50': '#FFF3DB',
               '100': '#FFE7B6',
               '200': '#FFDB92',
               '300': '#FFCE6D',
               '400': '#FFC249',
               '500': '#FFAA00',
               '600': '#C88600',
               '700': '#A46D00',
               '800': '#805500',
               '900': '#5B3D00',
               "solidColor": "#1C1B1F",
            },
            text: {
               primary: '#1C1B1F',
               secondary: '#575757',
               icon: '#1C1B1F'
            }
         }
      },
      dark: {
         palette: {
            background: {
               body: '#000',
               level1: '#000',
               level2: '#d9d9d9',
               level3: '#000'
            },
            primary: {
               '50': '#FFFFB6',
               '100': '#FFFF92',
               '200': '#FFFF6D',
               '300': '#FFFF49',
               '400': '#FFFF24',
               '500': '#FFFF00',
               '600': '#EDED00',
               '700': '#DBDB00',
               '800': '#C8C800',
               '900': '#B6B600',
               "solidColor": "#000",
            },
            text: {
               primary: '#fff',
               secondary: '#fff',
               tertiary: "#fff",
               icon: '#FFFF00'
            }
         }
      }
   },
   fontFamily: {
      body: ubuntu.style.fontFamily,
      display: ubuntu.style.fontFamily
   },
   components: {
      JoyButton: {
         styleOverrides: {
            root: {
               fontWeight:'700',
            }
         }
      }
   }
})

export default theme