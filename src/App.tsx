import { ThemeProvider } from "styled-components";
import { CoffeeContextProvider } from "./components/context/contextApi";
import { Summary } from "./components/Summary";
import { Transations } from "./pages/Transations";
import { GlobalStyles } from "./Styles/Global";
import { defaultTheme } from './Styles/Theme/Default'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <Transations />



        <GlobalStyles />
      </CoffeeContextProvider>
    </ThemeProvider>
  )
}

