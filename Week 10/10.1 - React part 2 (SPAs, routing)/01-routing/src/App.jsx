import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App(){
  return <div>
    <BrowserRouter>
      <Link to="/">Allen</Link>
      |
      <Link to="/neet/online-coaching-class-11">Class 11</Link>
      |
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
        <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

function Landing(){
  return <div>
    Welcome to Allen!
  </div>
}

function Class11Program(){
  return <div>
    Neet programs for class 11th
  </div>
}

function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }

  return <div>
    Neet programs for class 12th
    <br />
    <button onClick={redirectUser}>Back to landing page</button>
  </div>
}

function ErrorPage(){
  return <div>
    404. Page not found.
  </div>
}

export default App