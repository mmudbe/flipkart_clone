

// components
import Header from './components/header/header';
import Home from './components/Home/Home';

import DataProvider from './context/dataProvider';
import DetailView from './components/details/DetailView';

import {Box} from '@mui/material';

// wrap routes where we want to show or whatwant to change.
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    // we can use states of data provider in all components
    <DataProvider>
    <BrowserRouter>
       <Header />
  <Box style={{marginTop :50}}>
  <Routes>
     <Route path='/' element={<Home />} /> 
     <Route path='/product/:id' element={ <DetailView />} />
     <Route path='/cart' element={<Cart/>} />
    </Routes>
  </Box>
  </BrowserRouter>
    </DataProvider>
 

  );
}

export default App;
