import { Route, Routes } from 'react-router-dom';
import { Chart, Contact, NotFound } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
