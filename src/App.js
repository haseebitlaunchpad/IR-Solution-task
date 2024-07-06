import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
           <Route path="/Sig-Up" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// <Route path="/another-page" component={AnotherPage} />