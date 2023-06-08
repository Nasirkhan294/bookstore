import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<BooksList />} />
      </Routes>
    </div>
  );
}

export default App;
