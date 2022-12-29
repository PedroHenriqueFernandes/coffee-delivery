import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { ItemsCartProvider } from "./contexts/ItemsCartContext"
import { FormDataDeliveryProvider } from "./contexts/FormDataDeliveryContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <ItemsCartProvider>
          <FormDataDeliveryProvider>
            <Router />
          </FormDataDeliveryProvider>
        </ItemsCartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
