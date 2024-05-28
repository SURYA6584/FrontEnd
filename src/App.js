import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProperty from './Components/AddProperty.jsx';

import Try from './Components/Home';
import UpdateProperty from './Components/UpdateProperty.jsx';
import DeleteProperty from './Components/DeleteProperty.jsx';


function App() {
  return (
    <div>

      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/addproperty" element={<AddProperty />} />
            <Route path="/updateproperty" element={<UpdateProperty />} />
            <Route path="/deleteproperty" element={<DeleteProperty />} />

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Try />} />
 
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
