import {BrowserRouter} from 'react-router-dom'
import Pages from "@/pages";
import CssBaseline from '@mui/material/CssBaseline';
import {ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Pages/>
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App