'use client'

import * as React from 'react';
import { CssBaseline, CssVarsProvider, getInitColorSchemeScript } from '@mui/joy';
import theme from './theme';

export default function ThemeRegistry({ children }) {
   return (
      <CssVarsProvider defaultMode="light" theme={theme} disableNestedContext>
         {getInitColorSchemeScript()}
         <CssBaseline />
         {children}
      </CssVarsProvider>
   );  
}