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
               body: '#F5F5FC',
               level1: '#fff',
               level2: '#d9d9d9',
            },
            primary: {
               "solidColor": "#1C1B1F",
               "solidBg": "#FFAA00"
            }
         }
      }
   },
   fontFamily: {
      body: ubuntu,
      display: ubuntu
   },
   // components: {
   //    JoyButton: {
   //       styleOverrides: {

   //       }
   //    }
   // }
})

export default theme