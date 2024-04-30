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