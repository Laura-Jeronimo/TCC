import { BrowserRouter } from 'react-router-dom';
import './styles/global.css'
import { Layout } from './components/Layout';
import AllRoutes from './routes/index';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            style={{ width: "25rem" }}
            pauseOnHover
          />
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default App
