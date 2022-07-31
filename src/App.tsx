import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/theme'
import { Router } from './Router'
import { CyclesContextProvider } from './Context/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
