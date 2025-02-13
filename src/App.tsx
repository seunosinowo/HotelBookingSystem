import React from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Route>
      <Route path='/create' element={<Create/>} />
    </Route>
    </>
  );
}

export default App;
