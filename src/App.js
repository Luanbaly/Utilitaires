import { BrowserRouter } from 'react-router-dom';
import Views from './Views';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b bg-gray-100">
      <BrowserRouter>
      <Views />
    </BrowserRouter>
    </div>
  );
}

export default App;
