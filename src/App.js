import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavbarPortal/Navbar";
import Portal from "./pages/Portal/Portal";
import Registration from "./pages/registration/Registration";
import Login from "./pages/Login/Login";
import RegistrationPatient from "./pages/RegistrationPatient/RegistrationPatient";
import RegistrationDoctor from "./pages/RegistrationDoctor/RegistrationDoctor";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/registrationpatient"
            element={<RegistrationPatient />}
          />
          <Route path="/registrationdoctor" element={<RegistrationDoctor />} /> 
        </Routes>
      </Router>
    </>
  );
};

export default App;
