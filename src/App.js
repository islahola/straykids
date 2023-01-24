import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './components/contex/app-contex';
import Rute from './route/route';

function Test() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Rute/>
      </AppProvider>
    </BrowserRouter>
  );
}
export default Test;