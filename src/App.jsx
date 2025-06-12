import { Routes, Route } from 'react-router-dom';

import WebsiteRouter from './WebsiteRouter';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<WebsiteRouter/>} />
    </Routes>
  );
}

export default App;
