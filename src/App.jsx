import { Routes, Route } from "solid-app-router"

import Auth from './components/Auth'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
        );
}

export default App;
