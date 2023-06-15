import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
