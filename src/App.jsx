import "tailwindcss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from './components/profile';
import { VectorFieldSimulator } from "./components/projects/vector_field_simulator";
import { Touristic } from "./components/projects/touristic";
import { Billing } from "./components/projects/billing";
import { POS } from "./components/projects/pos";
import { CRM } from "./components/projects/crm";
import { Commissions } from "./components/projects/commissions";
import { Extranet } from "./components/projects/extranet";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Profile />} />
          <Route path="simulator" element={<VectorFieldSimulator />} />
          <Route path="touristic" element={<Touristic />} />
          <Route path="billing" element={<Billing />} />
          <Route path="pos" element={<POS />} />
          <Route path="crm" element={<CRM />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="extranet" element={<Extranet />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
