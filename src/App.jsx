import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Card } from './components/Card';
import { Layout } from './components/Layout';
import { Note } from './components/Note';

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;
