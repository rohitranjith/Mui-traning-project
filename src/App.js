import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import Users from './pages/users/Users';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Login from './pages/account/Login';
import { SnackbarProvider } from 'notistack';
import Register from './pages/account/Register';
import Faq from './pages/Faq';
import Shop from './pages/ecommerce/Shop';
import Details from './pages/ecommerce/Details';
// import Chart from './pages/Chart';
import ListingInfo from './pages/listing/ListingInfo';
import ListingStepper from './pages/listing/ListingStepper';
import Template from './pages/Template';
import Testing from './pages/Testing';



function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      // body1: {
      //     fontWeight: 500,
      // }
    },
  });

  return (
    <>
      <SnackbarProvider maxSnack={3} >
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/faq" element={<Faq />}></Route>
              <Route path="/shop" element={<Shop />}></Route>
              <Route path="/details" element={<Details />}></Route>
              {/* <Route path="/chart" element={<Chart />}></Route> */}
              <Route path="/listing" element={<ListingInfo />}></Route>
              <Route path="/stepper" element={<ListingStepper />}></Route>
              <Route path="/template" element={<Template />}></Route>
              <Route path="/testing" element={<Testing />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </ThemeProvider>
      </SnackbarProvider >
    </>
  );
}

export default App;
