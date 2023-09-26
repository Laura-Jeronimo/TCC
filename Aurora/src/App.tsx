import { BrowserRouter } from 'react-router-dom';
import './styles/global.css'
import { Layout } from './components/Layout';
import AllRoutes from './routes/index';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <Layout>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </Layout>
    </>
  )
}

export default App
