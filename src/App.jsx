import { Routes, Route } from 'react-router-dom';

import AppAdmin from './Admin/AppAdmin';
import WebsiteRouter from './WebsiteRouter';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<WebsiteRouter/>} />
      <Route path="/admin/*" element={<AppAdmin />} />
    </Routes>
  );
}

export default App;
