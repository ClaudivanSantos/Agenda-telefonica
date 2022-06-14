import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./themes/Theme";
import { Home } from "./Pages/Home";
import { UserForm } from "./Pages/UserForm";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { fontFamily: "Poppins" },
          }}
        />
        <UserForm/>
        <Home/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
