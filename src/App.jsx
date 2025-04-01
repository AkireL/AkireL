import "tailwindcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from './components/profile';

function App() {

  return (
    <>
    <BrowserRouter basename="/AkireL">
      <Routes>
        <Route>
          <Route path="/" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
