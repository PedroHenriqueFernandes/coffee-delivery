import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { ItemsCartProvider } from "./contexts/ItemsCartContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <ItemsCartProvider>
          <Router />
        </ItemsCartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
