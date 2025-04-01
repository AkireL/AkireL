import "tailwindcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from './components/profile';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
