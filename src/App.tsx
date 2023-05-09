import { Route, Routes } from 'react-router-dom';
import { Chart, Contact, NotFound } from './pages';
import { ContactForm } from './components';
import { Layout } from './containers';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<Contact />} />
          <Route path='/form' element={<ContactForm />} />
          <Route path='/form/:userId' element={<ContactForm />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
